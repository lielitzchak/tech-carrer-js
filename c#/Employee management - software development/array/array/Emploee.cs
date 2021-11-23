using System;


namespace ConsoleApp2
{
    class Emploee : Person
    {
        string FName;
        string LNmae;
        string department;
        public Emploee(string _fullName, float _age, float _phoneNumber, string _FName, string _LNmae, string _department)
            : base(_fullName, _age, _phoneNumber)
        {
            this.FName = _FName;
            this.LNmae = _LNmae;
            this.department = _department;
        }
        public void Print()
        {
            base.Print(); Console.WriteLine(this.FName);
            Console.WriteLine(this.LNmae);
            Console.WriteLine(this.department);
        }
    }
}
