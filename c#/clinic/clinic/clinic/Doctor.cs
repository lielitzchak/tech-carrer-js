using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace clinic
{
    class Doctor : Employee, IComparable
    {
        private int numpatients;
        private int birth;
        public Doctor(string _FName, string _LName, string _Job, int _patients, int _birth) : base(_FName, _LName, _Job)
        {
            this.numpatients = _patients;
            this.birth = _birth;
        }
        public int Numpatients
        {
            get { return this.numpatients; }
            set { this.numpatients = value; }
        }
        public int Birth
        {
            get { return this.birth; }
            set { this.birth = value; }
        }
        public int CompareTo(object obj)
        {
            Doctor doctor = (Doctor)obj;
            if (this.numpatients < doctor.numpatients)
            { return -1; }
            if (this.numpatients < doctor.numpatients)
            {
                return 1;
            }
            return 0;
        }
    }
}

