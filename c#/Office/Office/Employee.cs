using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Office
{
    class Employee
    {
        string Full_Name;
        string Birthday;
        string Email;
        int Salary;
        public Employee(string _Full_Name, string _Birthday, string _Email, int _Salary)
        {
            this.Full_Name = _Full_Name;
            this.Birthday = _Birthday;
            this.Email = _Email;
            Salary = _Salary;
        }
        public void printData()
        {
            string data = $"fisrt name; {this.Full_Name}\nage; {this.Birthday}\nbirthday; {this.Email}\nSalary; {this.Salary}";
            Console.WriteLine(data);
        }
    }
}
