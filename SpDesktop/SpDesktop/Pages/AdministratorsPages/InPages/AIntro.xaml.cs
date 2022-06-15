using SpDesktop.Classes;
using SpDesktop.Entities;
using SpDesktop.Pages.SystemsPages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Forms.DataVisualization.Charting;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace SpDesktop.Pages.AdministratorsPages.InPages
{
    /// <summary>
    /// Логика взаимодействия для AIntro.xaml
    /// </summary>
    public partial class AIntro : Page
    {
        private MusicalBaseEntities _contextS = new MusicalBaseEntities();
        public AIntro()
        {
            GlobalVars.FrameName = "Главная";
            InitializeComponent();
            State.Visibility = Visibility.Hidden;
            TimeSpan time = DateTime.Now.TimeOfDay;
            TimeSpan time0 = new TimeSpan(0, 0, 0);
            TimeSpan time6 = new TimeSpan(6, 0, 0);
            TimeSpan time12 = new TimeSpan(12, 0, 0);
            TimeSpan time18 = new TimeSpan(18, 0, 0);
            TimeSpan time24 = new TimeSpan(23, 59, 59);

            if (time >= time0 && time < time6)
            {
                HelloText.Text = "Доброй ночи, " + GlobalVars.NameStat;
            }
            else if (time >= time6 && time < time12)
            {
                HelloText.Text = "Доброе утро, " + GlobalVars.NameStat;
            }
            else if (time >= time12 && time < time18)
            {
                HelloText.Text = "Добрый день, " + GlobalVars.NameStat;
            }
            else if (time >= time18 && time <= time24)
            {
                HelloText.Text = "Добрый вечер, " + GlobalVars.NameStat;
            }
            else
            {
                HelloText.Text = "Здравствуйте, " + GlobalVars.NameStat;
            }

            ChartPayments.ChartAreas.Add(new ChartArea("Main"));

            var currentSeries = new Series("Количество объявлений")
            {
                IsValueShownAsLabel = true
            };
            ChartPayments.Series.Add(currentSeries);
            //ComboUsers.ItemsSource = _contextS.Users.ToList();
            ComboChartTypes.ItemsSource = Enum.GetValues(typeof(SeriesChartType));
        }

        private void Settings_Click(object sender, RoutedEventArgs e)
        {
            InNavigate.InFrame.Navigate(new Settings());
        }

        private void UpdateChart(object sender, SelectionChangedEventArgs e)
        {
            if (ComboChartTypes.SelectedItem is SeriesChartType currentType)
            {
                Series CurrentSeries = ChartPayments.Series.FirstOrDefault();
                CurrentSeries.ChartType = currentType;
                CurrentSeries.Points.Clear();

                var categoriesList = _contextS.Users.ToList();
                foreach (var category in categoriesList)
                {
                    CurrentSeries.Points.AddXY(category.Login, category.CountAdvertisement);
                }
            }
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            State.Visibility = Visibility.Visible;
            VisState.Visibility = Visibility.Hidden;
        }
    }
}
