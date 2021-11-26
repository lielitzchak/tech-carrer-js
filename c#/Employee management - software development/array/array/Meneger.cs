using System;


namespace ConsoleApp2
{
    class Meneger : Person
    {
        string FName;
        string LNmae;
        string department;
        string numWork;
        public Meneger(string _fullName, float _age, float _phoneNumber, 
            string _FName, string _LNmae, string _department, string _numWork)
            : base(_fullName, _age, _phoneNumber)
        {
            this.FName = _FName;
            this.LNmae = _LNmae;
            this.department = _department;
            this.numWork = _numWork;
        }
    }
}

