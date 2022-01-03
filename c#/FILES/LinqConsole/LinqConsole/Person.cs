using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinqConsole
{
    public class Person
    {
        string fName;
        string lName;
        int age;
        public Person(string fName, string lName, int age)
        {
            this.fName = fName;
            this.lName = lName;
            this.age = age;
        }
        public string Fname
        {
            get { return fName; }
            set { fName = value; }
        }
        public string LName
        {
            get { return lName; }
            set { lName = value; }
        }
        public int Age
        {
            get { return age; }
            set { age = value; }
        }

    }
}
