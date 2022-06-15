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
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace SpDesktop.Pages.AdministratorsPages.InPages
{
    /// <summary>
    /// Логика взаимодействия для AAdvertisements.xaml
    /// </summary>
    public partial class AAdvertisements : Page
    {
        public AAdvertisements()
        {
            GlobalVars.FrameName = "Объявления";
            InitializeComponent();
            listBook.ItemsSource = MusicalBaseEntities.GetContext().Advertisements.ToList();
        }

        private void ScrollViewer_PreviewMouseWheel(object sender, MouseWheelEventArgs e)
        {
            ScrollViewer scv = (ScrollViewer)sender;
            scv.ScrollToVerticalOffset(scv.VerticalOffset - e.Delta / 3);
            e.Handled = true;
        }

        private void listBook_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            //InNavigate.InFrame.Navigate(new Settings(((sender as Button).DataContext as User).UserId));
            MessageBoxResult QueBan = MessageBox.Show("Опубликовать объявление в общий доступ?", "Публикаиция объявления", MessageBoxButton.YesNo, MessageBoxImage.Question);
            if (QueBan == MessageBoxResult.Yes)
            {
                if  (listBook.SelectedItem != null)
                {
                    GlobalVars.Mursiak = (listBook.SelectedItem as Advertisement).AdvertisementId;
                    var Krimsak = $"UPDATE Advertisement SET Moderation = 1 WHERE AdvertisementId ='{GlobalVars.Mursiak}'";
                    var updateAdver = MusicalBaseEntities.GetContext().Database.ExecuteSqlCommand(Krimsak);
                    MusicalBaseEntities.GetContext().SaveChanges();
                    MusicalBaseEntities.GetContext().ChangeTracker.Entries().ToList().ForEach(p => p.Reload());
                    listBook.ItemsSource = MusicalBaseEntities.GetContext().Advertisements.ToList();
                }
            }
        }
    }
}
