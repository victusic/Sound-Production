using SpDesktop.Classes;
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

namespace SpDesktop.Pages.SystemsPages
{
    /// <summary>
    /// Логика взаимодействия для Settings.xaml
    /// </summary>
    public partial class Settings : Page
    {
        public Settings()
        {
            GlobalVars.FrameName = "Настройки";
            InitializeComponent();
        }

  

        private async void WriteL()
        {
            string path = "../../Styles/Style.txt";
            string text = "light";

            // полная перезапись файла 
            using (StreamWriter writer = new StreamWriter(path, false))
            {
                await writer.WriteLineAsync(text);
            }
            MessageBox.Show("Приложение будет перезапущенно", "Смена темы", MessageBoxButton.OK, MessageBoxImage.Information);
            System.Diagnostics.Process.Start(Application.ResourceAssembly.Location);
            Application.Current.Shutdown();
        }



        private async void WriteD()
        {
            string path = "../../Styles/Style.txt";
            string text = "dark";

            // полная перезапись файла 
            using (StreamWriter writer = new StreamWriter(path, false))
            {
                await writer.WriteLineAsync(text);
            }

            MessageBox.Show("Приложение будет перезапущенно", "Смена темы", MessageBoxButton.OK, MessageBoxImage.Information);
            System.Diagnostics.Process.Start(Application.ResourceAssembly.Location);
            Application.Current.Shutdown();
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            WriteL();
        }

        private void Button_Click_1(object sender, RoutedEventArgs e)
        {
            WriteD();
        }
    }
}
