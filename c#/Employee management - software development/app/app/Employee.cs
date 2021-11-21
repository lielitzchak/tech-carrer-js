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
    }
}

