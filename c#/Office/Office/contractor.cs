using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Office
{
    class contractor
    {
        string Full_Name;
        int Id_Number;
        string Email;
        string Copany;
        public contractor(string _Full_Name, int _Id_Number, string _Email, string _Copany)

        {
            this.Full_Name = _Full_Name;
            this.Id_Number = _Id_Number;
            this.Email = _Email;
            this.Copany = _Copany;
        }
    }
}
