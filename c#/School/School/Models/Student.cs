using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace School.Models
{

    public class Student
    {
        string firsName;
        string lastName;
        int birthYear;
        string classe;
        public Student() { }

        public Student(string _firsName, string _lastName, int _birthYear, string _classe)
        {
            this.firsName = _firsName;
            this.LastName = _lastName;
            this.BirthYear = _birthYear;
            this.Classe = _classe;
        }

        public string FirstName
        {
            get { return firsName; }
            set { firsName = value; }
        }
        public string LastName
        {
            get { return lastName; }
            set { lastName = value; }
        }
        public int BirthYear
        {
            get { return birthYear; }
            set { birthYear = value; }
        }
        public string Classe
        {
            get { return classe; }
            set { classe = value; }
        }
    }
}