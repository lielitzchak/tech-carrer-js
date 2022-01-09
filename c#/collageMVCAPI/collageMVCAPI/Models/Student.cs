using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace collageMVCAPI.Models
{
    public class Student
    {
        string first_name;
        string last_Name;
        string birthday;
        string email;
        int schoolYears;
        public Student() { }
        public Student(string _First_name, string _Last_Name, string _Birthday, string _Email, int _SchoolYears)
        {
            this.first_name = _First_name;
            this.last_Name = _Last_Name;
            this.birthday = _Birthday;
            this.email = _Email;
            this.schoolYears = _SchoolYears;
        }
        public string FirstName { get { return this.first_name; } set { this.first_name = value; } }
        public string LastName { get { return this.last_Name; } set { this.LastName = value; } }
        public string Birthday { get { return this.birthday; } set { this.birthday = value; } }
        public string Email { get { return this.email; } set { this.email = value; } }
        public int SchoolYears { get { return (int)this.schoolYears; } set { this.schoolYears = value; } }
    }
}