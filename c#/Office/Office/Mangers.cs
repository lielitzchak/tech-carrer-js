using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Office
{
    internal class Mangers
    {
        string First_Name;
        string Last_Name;
        string Birthday;
        string Email;
        string ClassWork;

        public Mangers(string _First_Name, string _Last_Name, string _Birthday, string _Email, string _ClassWork)
        {
            this.First_Name = _First_Name;
            this.Last_Name = _Last_Name;
            this.Birthday = _Birthday;
            this.Email = _Email;
            this.ClassWork = _ClassWork;
        }
    }
}
