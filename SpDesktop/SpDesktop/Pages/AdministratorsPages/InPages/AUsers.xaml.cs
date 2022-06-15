using SpDesktop.Classes;
using SpDesktop.Entities;
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
    /// Логика взаимодействия для AUsers.xaml
    /// </summary>
    public partial class AUsers : Page
    {
        public AUsers()
        {
            GlobalVars.FrameName = "Пользователи";
            InitializeComponent();
            DGrid.ItemsSource = MusicalBaseEntities.GetContext().Users.ToList();
            Text55.Visibility = Visibility.Hidden;
        }

        private void DGrid_IsVisibleChanged(object sender, DependencyPropertyChangedEventArgs e)
        {
            
            if (Visibility == Visibility.Visible)
            {
                MusicalBaseEntities.GetContext().ChangeTracker.Entries().ToList().ForEach(p => p.Reload());
            }
        }

        private void BanUser_Click(object sender, RoutedEventArgs e)
        {
            MessageBoxResult QueBan = MessageBox.Show("Заблокировать пользователя?", "Блокировка пользователя", MessageBoxButton.YesNo, MessageBoxImage.Question);
            if (QueBan == MessageBoxResult.Yes)
            {
                var USB = MusicalBaseEntities.GetContext().Users.Find(((sender as Button).DataContext as User).UserId);
                USB.IsActivity = 1;
                MusicalBaseEntities.GetContext().Entry(USB).State = System.Data.Entity.EntityState.Modified;
                MusicalBaseEntities.GetContext().SaveChanges();
                MusicalBaseEntities.GetContext().ChangeTracker.Entries().ToList().ForEach(p => p.Reload());
                DGrid.ItemsSource = MusicalBaseEntities.GetContext().Users.ToList();
            }
        }

        private void SearchBox_TextChanged(object sender, TextChangedEventArgs e)
        {
            Text55.Visibility = Visibility.Hidden;
            if (!string.IsNullOrEmpty(SearchBox.Text))
            {
                DGrid.ItemsSource = MusicalBaseEntities.GetContext().Users.Where(p => p.UserId.ToString().ToLower().Contains(SearchBox.Text.ToLower())).ToList();
                var rows = DGrid.ItemsSource.Cast<User>().ToList();
                if (rows.Count == 0)
                {
                    Text55.Visibility = Visibility.Visible;
                }
                else if (rows.Count != 0)
                {
                    Text55.Visibility = Visibility.Hidden;
                }
            }
            else
            {
                DGrid.ItemsSource = MusicalBaseEntities.GetContext().Users.ToList();
            }
        }

    }
}
