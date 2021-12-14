using System;
using System.Collections.Generic;


namespace school
{
    public class User : IComparable
    {
        private string firstName;
        private string lastName;
        private int birthYear;
        private string email;

        public User(string _firstName, string _lastName, int _birthYear, string _email)
        {
            this.firstName = _firstName;
            this.lastName = _lastName;
            this.birthYear = _birthYear;
            this.email = _email;
        }
        public string FirstName
        {
            get { return firstName; }
            set { this.firstName = value; }
        }
        public string LastName
        {
            get { return lastName; }
            set { this.lastName = value; }
        }
        public int BirthYear
        {
            get { return birthYear; }
            set { birthYear = value; }
        }

        public string Email
        {
            get { return email; }
            set { email = value; }
        }
        public virtual string PrintAllDetails()
        {
            return $"full name: {this.FirstName} {this.LastName}\nbirth: {this.BirthYear}\nemail: {this.Email}";
        }

        public int CompareTo(object obj)
        {
            User u = (User)obj;
            if (this.birthYear > u.birthYear) return -1;
            if (this.birthYear < u.birthYear) return 1;
            return 0;
        }
    }
}