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
    /// Логика взаимодействия для AHistoryR.xaml
    /// </summary>
    public partial class AHistoryR : Page
    {
        public AHistoryR()
        {
            GlobalVars.FrameName = "История регистрации";
            InitializeComponent();
            DGrid.ItemsSource = MusicalBaseEntities.GetContext().Users.ToList();
        }
    }
}
