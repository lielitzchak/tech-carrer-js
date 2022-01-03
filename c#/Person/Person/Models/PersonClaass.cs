using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PersonAplication.Models
{
    public class PersonClass
    {
        string fName;
        string LName;
        int age;
        string email;
        int id;
        public PersonClass() { }
        public PersonClass(string Fname, string Lname, int age, string email)
        {
            this.Fname = Fname;
            this.Lname = Lname;
            this.age = age;
            this.email = email;

        }
        public string Fname { get; set; }
        public string Lname { get; set; }
        public int Age { get; set; }
        public string Email { get; set; }
        public int Id { get; set; }



    }
}