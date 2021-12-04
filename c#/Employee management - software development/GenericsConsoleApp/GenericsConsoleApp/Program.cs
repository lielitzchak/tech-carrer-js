using System;
using System.Collections.Generic;

namespace GenericConsoleApp
{

    class Program
    {
        static void Main(string[] args)
        {
            //Table<int> table1 = new Table<int>("number ine", 24);
            //Console.WriteLine(table1.Legs);
            //Chers<int, float> chers = new Chers<int, float>(44,25);
            //Console.WriteLine(chers.Lengs);
            List<int> list = new List<int>();
            list.Add(1);
            list.Add(2);
            list.Add(3);
            list.Add(4);
            list.Add(5);
            List<string> list2 = new List<string>();
            list2.Add("aa");
            list2.Add("bb");
            list2.Add("cc");
            list2.Add("dd");
            List<double> flouatNumber = new List<double>();
            flouatNumber.Add(7);
            flouatNumber.Add(8);
            flouatNumber.Add(9);
            double[] arryNUm = new double[] { 10, 11, 21 };
            flouatNumber.AddRange(arryNUm);
            //Console.WriteLine(flouatNumber[4]);
            flouatNumber.RemoveAt(4);
            //Console.WriteLine(flouatNumber.Count());
            //Store<int, float, double> store2 = new Store<int, float, double>(6, 523, 22);




            //List<Store<float>> list1 = new List<Store<float>>();
            //list1.Add(new Store<float>(2,2));

            //foreach (Store<float> keyi in list1)
            //{
            //    //        numTable;
            //    //public T1 numtChers;
            //    //public T1 numClose;
            //    Console.WriteLine($"{keyi.numTable } ,{keyi.numtChers } "{ keyi.numTable } );
            //}



        }
    }
}