using app;
using System;

namespace App
{
    class Program
    {
        static void Main(string[] arge)
        {
            //string FullName, float Birth, string Email, string job, float salary
            Employee[] employees = {
                new Employee("liel itzchak",2000,"liel@gmail.com","full-stack",63326),
                new Employee("omer itzchak",1999,"liel@gmail.com","full-stack",65632),
                new Employee("ella itzchak",1645,"liel@gmail.com","full-stack",56336),
                new Employee("mila itzchak",1840,"liel@gmail.com","full-stack",81354),
                new Employee("nora itzchak",1388,"liel@gmail.com","full-stack",96366)
            };
            Console.WriteLine("beafor");
            for (int i = 0; i < employees.Length; i++)
            {
                employees[i].PrintAll();
            }
            Console.WriteLine("after");
            Array.Sort(employees);
            for (int i = 0;i < employees.Length; i++)
            {
                employees[i].PrintAll();
            }
            //Comare[] users = new Comare[] {
            //new Comare("malachi", 2014, "malachi@gmail.com"),
            //new Comare("binjamin", 2010, "minjamin@gmail.com"),
            //new Comare("omer", 1999, "omer@gmail.com"),
            //new Comare("shilat", 2006, "shilat@gmail.com"),
            //new Comare("liel", 2000, "liel@gmail.com"),
            //};
            //Console.WriteLine("before");
            //for (int i = 0; i < users.Length; i++)
            //{
            //    users[i].PrintAll();
            //}
            //Array.Sort(users);
            //Console.WriteLine("after");
            //for (int i = 0; i < users.Length; i++)
            //{
            //    users[i].PrintAll();
            //}

            //TwoComare.PrintAll();
            //oneComare.PrintAll();
            //Console.WriteLine(oneComare);
            //Console.WriteLine("name");
            //string FName = Console.ReadLine();
            //Console.WriteLine("last name");
            //string LName = Console.ReadLine();
            //Console.WriteLine("age");
            //int age = int.Parse(Console.ReadLine());
            //Develop[] AllUsers =
            //{
            // new Develop(FName, LName, age),
            // new Develop("liel", "itzchak", 21),
            // new Develop("shilat", "itzchak", 21),
            // new Develop("binjamin", "itzchak", 21),
            // new Develop("malachi", "itzchak", 21)
            //};


        }
        //struct Develop
        //{
        //    private string FName;
        //    private string LName;
        //    private float Age;


        //    public Develop(string _FName, string _LName, int _Age)
        //    {
        //        this.FName = _FName;
        //        this.LName = _LName;
        //        this.Age = _Age;
        //    }
        //}
    }
}