using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Factory.Models
{
    public class Director
    {
        private string firstName;
        private string lastName;
        private int yeatBirth;
        private int classe;
        public Director(string _firstName, string _lastName, int _yeatBirth, int _classe)
        {
            this.firstName = _firstName;
            this.lastName = _lastName;
            this.yeatBirth = _yeatBirth;
            this.classe = _classe;

        }
    }
}