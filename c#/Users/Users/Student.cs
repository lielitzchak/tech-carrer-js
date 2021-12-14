using System;
using System.Collections.Generic;

namespace school
{
  public  class Student : User
    {
        private string grade;

        public Student(string _firstName, string _lastName, int _birthYear, string _email, string _grade) : base(_firstName, _lastName, _birthYear, _email)
        {
            this.grade = _grade;
        }
        public string Grade
        {
            get { return this.grade; }
            set { this.grade = value; }
        }

        public override string PrintAll()
        {
            return $"{base.PrintAll()}\nGrade - {this.grade}";
        }
    }
}