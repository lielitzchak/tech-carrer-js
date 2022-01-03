using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LINQtoSQLaplication
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string stringConnection = @"Data Source=liel-itzchak;Initial Catalog=dataDB;Integrated Security=True;Pooling=False";
            DogDataContext dogDataContext = new DogDataContext(stringConnection);
            foreach (Dog dog in dogDataContext.Dogs)
            {
                Console.WriteLine(dog.Name);
            }
    }
}

        }