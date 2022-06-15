using SpDesktop.Classes;
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
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace SpDesktop
{
    /// <summary>
    /// Логика взаимодействия для MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            StreamReader sr = new StreamReader("../../Styles/Style.txt");
            String line;
            line = sr.ReadLine();
            sr.Close();

            var uri = new Uri("../../Styles/" + line + ".xaml", UriKind.Relative);
            ResourceDictionary resourceDict = Application.LoadComponent(uri) as ResourceDictionary;
            Application.Current.Resources.Clear();
            Application.Current.Resources.MergedDictionaries.Add(resourceDict);

            InitializeComponent();
            Frame.Navigate(new LogIn());
            Navigation.Frame = Frame;
        }
    }
}
