using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Factory.Models
{
    public class Employee
    {
        private string firstName;
        private string lastName;
        private int yeatBirth;
        private int phone;
        public Employee(string _firstName, string _lastName, int _yeatBirth, int _phone)
        {
            this.firstName = _firstName;
            this.lastName = _lastName;
            this.yeatBirth = _yeatBirth;
            this.phone = _phone;
        }

    }
}