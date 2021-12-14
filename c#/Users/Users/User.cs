using System;
using System.Collections.Generic;


namespace school
{
    public class User : IComparable
    {
        public string firstName;
        public string lastName;
        public int birthYear;
        public string email;

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
        public virtual string PrintAll()
        {
            return $"full name: {this.firstName} {this.lastName}\nbirth: {this.birthYear}\nemail: {this.email}";
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