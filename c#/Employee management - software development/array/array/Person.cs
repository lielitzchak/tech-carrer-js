using System;


namespace ConsoleApp2
{
    public class Person
    {
        public string fullName;
        public float age;
        public float phoneNumber;
        public Person(string _fullName, float _age, float _phoneNumber):base()  
        {
            fullName = _fullName;
            age = _age;
            phoneNumber = _phoneNumber;
        }
        public void Print()
        {
            Console.WriteLine(this.fullName);
            Console.WriteLine(this.age);
            Console.WriteLine(this.phoneNumber);
        }
    }
}
