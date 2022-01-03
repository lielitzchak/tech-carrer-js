using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace sqlWithConsole
{
    class Person
    {
        string firstName;
        string LastName;
        int age;
        string birthday;
        public Person(string _firstName, string _LastName, int _age, string _birthday)
        {
            this.firstName = _firstName;
            this.LastName = _LastName;
            this.age = _age;
            this.birthday = _birthday;
        }
      public  void printData()
        {
            string data = $"fisrt name; {this.firstName}\nlast name; {this.LastName}\nage; {this.age}\nbirthday; {this.birthday}";
            Console.WriteLine(data);
        }
    }

}
