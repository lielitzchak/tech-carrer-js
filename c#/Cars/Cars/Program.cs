using System;
namespace Cars
{
    class Program
    {
        static void Main(string[] args)
        {

            //Car volvo = new Car(44, 85, 450, "pink");
            //volvo.PrintCw();
            //Car[] ObjCars = { new Car(1313, 1414, 1515, "green"), new Car(1010, 1111, 1212, "yellow"), new Car(77, 88, 99, "black"), new Car(44, 55, 66, "red"), new Car(11, 22, 33, "blue") };
            //Console.WriteLine("before");
            //for (int i = 0; i < ObjCars.Length; i++)
            //{
            //    ObjCars[i].PrintCw();

            //}
            //Array.Sort(ObjCars);
            //Console.WriteLine("after");

            //for (int i = 0; i < ObjCars.Length; i++)
            //{
            //    ObjCars[i].PrintCw();
            //}
            //Bus bus1 = new Bus();
            //bus1.Seat = 5;
            //bus1.Company = "dan";


            SportCar newCar = new SportCar(450, 120, 88, "jj", "l", 5);
            //Console.WriteLine("before");
            //SportCar[] sportCars = {
            //new SportCar(1, 1, 1, "jj", "l", 1),
            //new SportCar(3, 3, 3, "jj", "l", 3),
            //new SportCar(2, 2, 2, "jj", "l", 2),
            //new SportCar(4, 4, 4, "jj", "l", 4),
            //new SportCar(5, 5, 5, "jj", "l", 5) };
            //for (int i = 0; i < sportCars.Length; i++)
            //{
            //    sportCars[i].PrintCw();
            //}
            //Console.WriteLine("after");

            //Array.Sort(sportCars);
            //for (int i = 0; i < sportCars.Length; i++)
            //{
            //    sportCars[i].PrintCw();
            //}

            Rectangle Shape = new Rectangle(4, 2);
            //Console.WriteLine(Shape);
            Console.WriteLine(Shape.SquareArea());
        }
    }
}
