using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Factory.Models
{
    public class Inspector
    {
        private string firstName;
        private string lastName;
        private int yeatBirth;
        private int yearsWork;
        public Inspector(string _firstName, string _lastName, int _yeatBirth, int _yearsWork)
        {
            this.firstName = _firstName;
            this.lastName = _lastName;
            this.yeatBirth = _yeatBirth;
            this.yearsWork = _yearsWork;

        }

    }
}