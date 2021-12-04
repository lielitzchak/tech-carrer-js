using System;


namespace app
{
    class Employee : Comare
    {
        string job;
        float salary;
        public Employee(string FullName, float Birth, string Email, string job, float salary) : base(FullName, Birth, Email)
        {
            this.job = job;
            this.salary = salary;
        }
        protected override string PrintAll()
        {
            return $"{ base.PrintAll()},JOB: {this.job}, salary: {this.salary} ";
        }
        public void Print()
        {
            Console.WriteLine(this.PrintAll());
        }
    }
}

