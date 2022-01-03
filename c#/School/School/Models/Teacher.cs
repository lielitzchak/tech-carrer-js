using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace School.Models
{
    public class Teacher
    {
        string firstName;
        string lastNAme;
        int birthYear;
        int salary;

        public Teacher()
        {
        }

        public Teacher(string _firstName, string _lastNAme, int _birthYear, int _salary)
        {
            this.firstName = _firstName;
            this.lastNAme = _lastNAme;
            this.birthYear = _birthYear;
            this.salary = _salary;
        }
    }
}