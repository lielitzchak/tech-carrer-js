using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace clinic
{
    class Employee
    {
        private string fName;
        private string lName;
        private string job;
        public Employee(string _FName, string _LName, string _job)
        {
            this.fName = _FName;
            this.lName = _LName;
            this.job = _job;
        }
        public string FName
        {
            get { return fName; }
            set { fName = value; }
        }
        public string LName
        {
            set { lName = value; }
            get { return lName; }
        }
        public string Job
        {
            get { return job; }
            set { job = value; }
        }
    }
}
