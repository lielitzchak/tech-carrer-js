using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExceptionProgramApp
{
    public class Bank<T> where T : IComparable<T>
    {
        private string color;
        private string lengthShtar;
        private T amount;
        public int Color { get; set; }
        public string LengthShtar { get; set; }
        public T Amount { get; set; }

        public int CompareTo(object? obj)
        {
            Bank<T> bank = (Bank<T>)obj;
            Console.WriteLine(bank.CompareTo);
            //if (bank.Amount <= this.amount)
            //{
            //    if (bank.Amount > this.amount)
            //    {
            //        return 1;
            //    }
            //    else
            //    {

            //        return 0;
            //    }
            //}
            //return -1;
        }
    }
}
