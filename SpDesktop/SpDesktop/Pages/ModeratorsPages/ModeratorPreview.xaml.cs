using SpDesktop.Classes;
using SpDesktop.Pages.AdministratorsPages.InPages;
using SpDesktop.Pages.SystemsPages;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
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

namespace SpDesktop.Pages.ModeratorsPages
{
    /// <summary>
    /// Логика взаимодействия для ModeratorPreview.xaml
    /// </summary>
    public partial class ModeratorPreview : Page
    {
        public ModeratorPreview()
        {
            InitializeComponent();
            InFrame.Navigate(new AIntro());
            InNavigate.InFrame = InFrame;

            ULogin.Content = GlobalVars.LoginStat;
            UMail.Content = GlobalVars.MailStat;
            MemoryStream stream = new MemoryStream(GlobalVars.LogoStat);
            BitmapImage image = new BitmapImage();
            image.BeginInit();
            image.StreamSource = stream;
            image.EndInit();
            UserPhoto.Source = image;
            if (Navigation.Frame.CanGoBack)
            {
                BLeft.Style = (Style)BLeft.FindResource("ToolsIconS");
            }
            else
            {
                BLeft.Style = (Style)BLeft.FindResource("ToolsIconNo");
            }
            if (Navigation.Frame.CanGoForward)
            {
                RLeft.Style = (Style)RLeft.FindResource("ToolsIconS");
            }
            else
            {
                RLeft.Style = (Style)RLeft.FindResource("ToolsIconNo");
            }

            DoubleAnimation myDoubleAnimation = new DoubleAnimation();
            myDoubleAnimation.From = 0;
            myDoubleAnimation.To = 1;
            myDoubleAnimation.Duration = new Duration(TimeSpan.FromSeconds(0.25));
            Pad.BeginAnimation(Grid.OpacityProperty, myDoubleAnimation);
            ULogin.BeginAnimation(Label.OpacityProperty, myDoubleAnimation);
            UMail.BeginAnimation(Label.OpacityProperty, myDoubleAnimation);
            URoll.BeginAnimation(Label.OpacityProperty, myDoubleAnimation);
            PreviewText.BeginAnimation(Label.OpacityProperty, myDoubleAnimation);
            LeftB.BeginAnimation(Button.OpacityProperty, myDoubleAnimation);
            RightB.BeginAnimation(Button.OpacityProperty, myDoubleAnimation);
            MainB.BeginAnimation(Button.OpacityProperty, myDoubleAnimation);
            AdverB.BeginAnimation(Button.OpacityProperty, myDoubleAnimation);
            UsersB.BeginAnimation(Button.OpacityProperty, myDoubleAnimation);
            GroupsB.BeginAnimation(Button.OpacityProperty, myDoubleAnimation);
            AreasB.BeginAnimation(Button.OpacityProperty, myDoubleAnimation);
            Back.BeginAnimation(Button.OpacityProperty, myDoubleAnimation);
            InFrame.BeginAnimation(Frame.OpacityProperty, myDoubleAnimation);
        }

        private void LeftB_Click(object sender, RoutedEventArgs e)
        {
            if (InNavigate.InFrame.CanGoBack)
            {
                InNavigate.InFrame.GoBack();
                PreviewText.Content = GlobalVars.FrameName;
            }
        }

        private void RightB_Click(object sender, RoutedEventArgs e)
        {
            if (InNavigate.InFrame.CanGoForward)
            {
                InNavigate.InFrame.GoForward();
                PreviewText.Content = GlobalVars.FrameName;
            }
        }

        private void Back_Click(object sender, RoutedEventArgs e)
        {
            GlobalVars.Exit = 1;
            DoubleAnimation myDoubleAnimation = new DoubleAnimation();
            myDoubleAnimation.From = 1;
            myDoubleAnimation.To = 0;
            myDoubleAnimation.Duration = new Duration(TimeSpan.FromSeconds(0.25));
            Pad.BeginAnimation(Grid.OpacityProperty, myDoubleAnimation);
            ULogin.BeginAnimation(Label.OpacityProperty, myDoubleAnimation);
            UMail.BeginAnimation(Label.OpacityProperty, myDoubleAnimation);
            URoll.BeginAnimation(Label.OpacityProperty, myDoubleAnimation);
            PreviewText.BeginAnimation(Label.OpacityProperty, myDoubleAnimation);
            LeftB.BeginAnimation(Button.OpacityProperty, myDoubleAnimation);
            RightB.BeginAnimation(Button.OpacityProperty, myDoubleAnimation);
            MainB.BeginAnimation(Button.OpacityProperty, myDoubleAnimation);
            AdverB.BeginAnimation(Button.OpacityProperty, myDoubleAnimation);
            UsersB.BeginAnimation(Button.OpacityProperty, myDoubleAnimation);
            GroupsB.BeginAnimation(Button.OpacityProperty, myDoubleAnimation);
            AreasB.BeginAnimation(Button.OpacityProperty, myDoubleAnimation);
            Back.BeginAnimation(Button.OpacityProperty, myDoubleAnimation);
            InFrame.BeginAnimation(Frame.OpacityProperty, myDoubleAnimation);

            DoubleAnimation PadAnimation = new DoubleAnimation();
            PadAnimation.From = 1;
            PadAnimation.To = 0;
            PadAnimation.Duration = new Duration(TimeSpan.FromSeconds(0.75));
            PadAnimation.Completed += Animation_Completed;

            PadVi.BeginAnimation(Label.OpacityProperty, PadAnimation);
        }

        private void Animation_Completed(object sender, EventArgs e)
        {
            Navigation.Frame.Navigate(new LogIn());
        }

        private void MainB_Click(object sender, RoutedEventArgs e)
        {
            InNavigate.InFrame.Navigate(new AIntro());
            PreviewText.Content = GlobalVars.FrameName;
        }

        private void AdverB_Click(object sender, RoutedEventArgs e)
        {
            InNavigate.InFrame.Navigate(new AAdvertisements());
            PreviewText.Content = GlobalVars.FrameName;
        }

        private void UsersB_Click(object sender, RoutedEventArgs e)
        {
            InNavigate.InFrame.Navigate(new AUsers());
            PreviewText.Content = GlobalVars.FrameName;
        }

        private void GroupsB_Click(object sender, RoutedEventArgs e)
        {
            InNavigate.InFrame.Navigate(new AGroups());
            PreviewText.Content = GlobalVars.FrameName;
        }

        private void AreasB_Click(object sender, RoutedEventArgs e)
        {
            InNavigate.InFrame.Navigate(new AAreas());
            PreviewText.Content = GlobalVars.FrameName;
        }

    }
}
