using SpDesktop.Classes;
using SpDesktop.Entities;
using SpDesktop.Pages.AdministratorsPages;
using SpDesktop.Pages.ModeratorsPages;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace SpDesktop.Pages.SystemsPages
{
    /// <summary>
    /// Логика взаимодействия для LogIn.xaml
    /// </summary>
    public partial class LogIn : Page
    {
        //public User table;
        public LogIn()
        {
            InitializeComponent();

            if (GlobalVars.Exit == 1)
            {
                DoubleAnimation widthAnimation = new DoubleAnimation();
                widthAnimation.From = 400;
                widthAnimation.To = 90;
                widthAnimation.Duration = TimeSpan.FromSeconds(0.25);

                Grid1.BeginAnimation(Grid.WidthProperty, widthAnimation);
                Grid3.BeginAnimation(Grid.WidthProperty, widthAnimation);

                SolidColorBrush brush = new SolidColorBrush((Color)ColorConverter.ConvertFromString("#FF474C50"));
                Grid1.Background = brush;

                ColorAnimation animation = new ColorAnimation((Color)ColorConverter.ConvertFromString("#FF474C50"), (Color)ColorConverter.ConvertFromString("#FF373C3F"), new Duration(TimeSpan.FromSeconds(0.25)));
                brush.BeginAnimation(SolidColorBrush.ColorProperty, animation);

                DoubleAnimation myDoubleAnimation = new DoubleAnimation();
                myDoubleAnimation.From = 0;
                myDoubleAnimation.To = 1;
                myDoubleAnimation.Duration = new Duration(TimeSpan.FromSeconds(0.25));
                Sp.BeginAnimation(Label.OpacityProperty, myDoubleAnimation);
                PreviewText.BeginAnimation(Label.OpacityProperty, myDoubleAnimation);
                Login.BeginAnimation(Grid.OpacityProperty, myDoubleAnimation);
                GlobalVars.Exit = 0;
            }

            if (GlobalVars.inputL != "")
            {
                LoginBox.Text = GlobalVars.inputL;
            }
            if (GlobalVars.inputP != "")
            {
                PasswordBox.Password = GlobalVars.inputP;
            }



            PasswordBoxS.Visibility = Visibility.Hidden;
            Loader.Visibility = Visibility.Hidden;
            DoubleAnimation da = new DoubleAnimation();
            da.From = 0;
            da.To = 360;
            da.Duration = new Duration(TimeSpan.FromSeconds(3));
            da.RepeatBehavior = RepeatBehavior.Forever;
            RotateTransform rt = new RotateTransform();
            PR.RenderTransform = rt;
            rt.BeginAnimation(RotateTransform.AngleProperty, da);

            DoubleAnimation da2 = new DoubleAnimation();
            da2.From = 0;
            da2.To = 360;
            da2.Duration = new Duration(TimeSpan.FromSeconds(1.5));
            da2.RepeatBehavior = RepeatBehavior.Forever;
            RotateTransform rt1 = new RotateTransform();
            YR.RenderTransform = rt1;
            rt1.BeginAnimation(RotateTransform.AngleProperty, da2);

            DoubleAnimation da3 = new DoubleAnimation();
            da3.From = 0;
            da3.To = 360;
            da3.Duration = new Duration(TimeSpan.FromSeconds(1));
            da3.RepeatBehavior = RepeatBehavior.Forever;
            RotateTransform rt2 = new RotateTransform();
            PIR.RenderTransform = rt2;
            rt2.BeginAnimation(RotateTransform.AngleProperty, da3);
        }
        public void LoginBoxRemoveText(object sender, EventArgs e)
        {
            TextBox instance = (TextBox)sender;
            if (instance.Text == instance.Tag.ToString())
                instance.Text = "";
        }

        public void LoginBoxAddText(object sender, EventArgs e)
        {
            TextBox instance = (TextBox)sender;
            if (string.IsNullOrWhiteSpace(instance.Text))
                instance.Text = instance.Tag.ToString();
        }

        public void PasswordBoxRemoveText(object sender, EventArgs e)
        {
            PasswordBox instance = (PasswordBox)sender;
            if (instance.Password == instance.Tag.ToString())
                instance.Password = "";
        }

        private void Eye_MouseDown(object sender, MouseButtonEventArgs e)
        {
            PasswordBoxS.Text = PasswordBox.Password;
            PasswordBox.Visibility = Visibility.Hidden;
            PasswordBoxS.Visibility = Visibility.Visible;
            Eye.Icon = FontAwesome.Sharp.IconChar.Eye;
        }

        private void Eye_MouseUp(object sender, MouseButtonEventArgs e)
        {

            PasswordBox.Visibility = Visibility.Visible;
            PasswordBoxS.Visibility = Visibility.Hidden;
            Eye.Icon = FontAwesome.Sharp.IconChar.EyeSlash;
        }

        private void Log_BtnGo_Click(object sender, RoutedEventArgs e)
        {
            /*var messageBox = new AmRoMessageBox
            {
                Background = "#222222",
                TextColor = "#ffffff",
                IconColor = "#3399ff",
                RippleEffectColor = "#000000",
                ClickEffectColor = "#1F2023",
                ShowMessageWithEffect = true,
                EffectArea = this
            };*/

            if (LoginBox.Text.Length == 0 || PasswordBox.Password.Length == 0)
            {
                if (LoginBox.Text.Length == 0 && PasswordBox.Password.Length == 0)
                {
                    MessageBox.Show("Введите пароль и логин", "Предупреждение входа");
                }
                else if (PasswordBox.Password.Length == 0)
                {
                    MessageBox.Show("Введите пароль", "Предупреждение входа");
                }
                else if (LoginBox.Text.Length == 0)
                {
                    MessageBox.Show("Введите логин", "Предупреждение входа");
                }
            }
            else
            {
                Load();
            }
        }
        public async void Load()
        {
            Loader.Visibility = Visibility.Visible;
            Login.Visibility = Visibility.Hidden;
            LogInA();
        }
        public async void LogInA()
        {
            /*var messageBox = new AmRoMessageBox
            {
                Background = "#222222",
                TextColor = "#ffffff",
                IconColor = "#3399ff",
                RippleEffectColor = "#000000",
                ClickEffectColor = "#1F2023",
                ShowMessageWithEffect = true,
                EffectArea = this
            };*/

            int userId = 0;

            using (MusicalBaseEntities databd = new MusicalBaseEntities())
            {
                var LB = LoginBox.Text;
                var PB = PasswordBox.Password;
                var table = await databd.Users.Where(l => l.Login == LB && l.Password == PB).FirstOrDefaultAsync();
                var tableLogin = await databd.Users.Where(l => l.Login == LB && l.Password != PB).FirstOrDefaultAsync();

                if (tableLogin != null)
                {
                    userId = tableLogin.UserId;
                    if (userId != 0)
                    {
                        MessageBox.Show("Вы не правильно ввели логин или пароль", "Ошибка входа");
                        HistoriAdd(userId, false);
                    }
                }
                if (table != null)
                {
                    if (table.IsActivity == 0)
                    {
                        var rol = table.Roll;
                        GlobalVars.LogoStat = table.Logo;
                        GlobalVars.NameStat = table.Name;
                        GlobalVars.MailStat = table.Mail;
                        GlobalVars.LoginStat = table.Login;
                        GlobalVars.UserIdStat = table.UserId;
                        GlobalVars.inputL = LoginBox.Text;
                        GlobalVars.inputP = PasswordBox.Password;
                        if (rol == 1)
                        {
                            DoubleAnimation widthAnimation = new DoubleAnimation();
                            widthAnimation.From = Grid1.ActualWidth;
                            widthAnimation.To = 400;
                            widthAnimation.Duration = TimeSpan.FromSeconds(0.25);

                            Grid1.BeginAnimation(Grid.WidthProperty, widthAnimation);
                            Grid3.BeginAnimation(Grid.WidthProperty, widthAnimation);

                            SolidColorBrush brush = new SolidColorBrush((Color)ColorConverter.ConvertFromString("#FF373C3F"));
                            Grid1.Background = brush;

                            ColorAnimation animation = new ColorAnimation((Color)ColorConverter.ConvertFromString("#FF373C3F"), (Color)ColorConverter.ConvertFromString("#FF474C50"), new Duration(TimeSpan.FromSeconds(0.25)));
                            brush.BeginAnimation(SolidColorBrush.ColorProperty, animation);

                            DoubleAnimation myDoubleAnimation = new DoubleAnimation();
                            myDoubleAnimation.From = 1;
                            myDoubleAnimation.To = 0;
                            myDoubleAnimation.Duration = new Duration(TimeSpan.FromSeconds(0.25));
                            Sp.BeginAnimation(Label.OpacityProperty, myDoubleAnimation);
                            PreviewText.BeginAnimation(Label.OpacityProperty, myDoubleAnimation);
                            Loader.BeginAnimation(Grid.OpacityProperty, myDoubleAnimation);

                            await Task.Run(() => { Thread.Sleep(750); Dispatcher.BeginInvoke(new ThreadStart(delegate { Navigation.Frame.Navigate(new AdminPreview()); })); });

                        }
                        else if (rol == 2)
                        {
                            DoubleAnimation widthAnimation = new DoubleAnimation();
                            widthAnimation.From = Grid1.ActualWidth;
                            widthAnimation.To = 400;
                            widthAnimation.Duration = TimeSpan.FromSeconds(0.25);

                            Grid1.BeginAnimation(Grid.WidthProperty, widthAnimation);
                            Grid3.BeginAnimation(Grid.WidthProperty, widthAnimation);

                            SolidColorBrush brush = new SolidColorBrush((Color)ColorConverter.ConvertFromString("#FF373C3F"));
                            Grid1.Background = brush;

                            ColorAnimation animation = new ColorAnimation((Color)ColorConverter.ConvertFromString("#FF373C3F"), (Color)ColorConverter.ConvertFromString("#FF474C50"), new Duration(TimeSpan.FromSeconds(0.25)));
                            brush.BeginAnimation(SolidColorBrush.ColorProperty, animation);

                            DoubleAnimation myDoubleAnimation = new DoubleAnimation();
                            myDoubleAnimation.From = 1;
                            myDoubleAnimation.To = 0;
                            myDoubleAnimation.Duration = new Duration(TimeSpan.FromSeconds(0.25));
                            Sp.BeginAnimation(Label.OpacityProperty, myDoubleAnimation);
                            PreviewText.BeginAnimation(Label.OpacityProperty, myDoubleAnimation);
                            Loader.BeginAnimation(Grid.OpacityProperty, myDoubleAnimation);

                            await Task.Run(() => { Thread.Sleep(750); Dispatcher.BeginInvoke(new ThreadStart(delegate { Navigation.Frame.Navigate(new ModeratorPreview()); })); });

                        }
                        else if (rol == 3)
                        {
                            MessageBox.Show("Данный тип аккаунта не поддерживается данным приложением", "Ошибка", MessageBoxButton.OK, MessageBoxImage.Error);
                        }
                        else if (rol == 4)
                        {
                            MessageBox.Show("Данный тип аккаунта не поддерживается данным приложением", "Ошибка", MessageBoxButton.OK, MessageBoxImage.Error);
                        }
                    }
                    else
                    {
                        HistoriAdd(userId, false);
                        MessageBox.Show("Ваш аккаунт был заблокирован, за подробностями обратититесь на нашу почту", "Ошибка входа");
                    }


                    if (table == null && (LoginBox.Text.Length != 0 && PasswordBox.Password.Length != 0))
                    {
                            MessageBox.Show("Вы не правильно ввели логин или пароль", "Ошибка входа");
                    }
                }
            }
        }

        public static void HistoriAdd(int userId, bool state)
        {
            try
            {
                AutorisationHistory HistoryLogin = new AutorisationHistory();
                HistoryLogin.UserId = userId;
                HistoryLogin.Date = DateTime.Now;
                HistoryLogin.State = state;
                MusicalBaseEntities.GetContext().AutorisationHistories.Add(HistoryLogin);
                MusicalBaseEntities.GetContext().SaveChanges();
            }
            catch (Exception ex)
            {
                /*var messageBox = new AmRoMessageBox
                {
                    Background = "#222222",
                    TextColor = "#ffffff",
                    IconColor = "#3399ff",
                    RippleEffectColor = "#000000",
                    ClickEffectColor = "#1F2023",
                    ShowMessageWithEffect = true
                };*/
                MessageBox.Show(ex.Message.ToString());
            }
        }
    }
}
