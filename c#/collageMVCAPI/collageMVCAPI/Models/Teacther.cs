using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace collageMVCAPI.Models
{
    public class Teacther
    {
        string first_Name;
        string last_Name;
        string domain;
        string email;
        int salary;
        public Teacther() { }
        public Teacther(string _first_Name, string _last_Name, string _domain, string _email, int _salary)
        {
            this.first_Name = _first_Name;
            this.last_Name = _last_Name;
            this.domain = _domain;
            this.email = _email;
            this.salary = _salary;
        }

        public string FirstName { get { return first_Name; } set { this.FirstName = value; } }
        public string LastName { get { return last_Name; } set { this.LastName = value; } }
        public string Domain { get { return domain; } set { domain = value; } }
        public string Email { get { return email; } set { email = value; } }
        public int Salary { get { return salary; } set { salary = value; } }


    }
}