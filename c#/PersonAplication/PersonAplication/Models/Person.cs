using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PersonAplication.Models
{
    public class Person
    {
        string Fname;
        string Lname;
        int age;
        string email;
       public  Person(string Fname,   string Lname,    int age,   string email)
        {
            this.Fname = Fname;
            this.Lname = Lname;
            this.age = age;
            this.email = email;
        }

    }
}