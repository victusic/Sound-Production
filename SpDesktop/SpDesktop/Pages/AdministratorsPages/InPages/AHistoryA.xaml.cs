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
    /// Логика взаимодействия для AHistoryA.xaml
    /// </summary>
    ///
    public partial class AHistoryA : Page
    {
        private MusicalBaseEntities _contextS = new MusicalBaseEntities();
        public AHistoryA()
        {
            GlobalVars.FrameName = "История авторизации";
            InitializeComponent();
            DGrid.ItemsSource = MusicalBaseEntities.GetContext().AutorisationHistories.ToList();
        }
    }
}
