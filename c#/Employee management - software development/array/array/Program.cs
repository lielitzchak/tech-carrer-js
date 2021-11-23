using System;

namespace ConsoleApp2
{
    class Program
    {
        static void Main(string[] args)
        {
            //Emploee liel = new Emploee("liel itzchak", 21, 547080093, "liel", "itzchak", "full stack");
            //liel.Print();
            Console.WriteLine("full name");
            string fulltName = Console.ReadLine();
            Console.WriteLine("age");
            float age = float.Parse(Console.ReadLine());
            Console.WriteLine("phone number");
            float phoneNumber = float.Parse(Console.ReadLine());
            Console.WriteLine("first name");
            string firstName = Console.ReadLine();
            //string lastName = Console.ReadLine();
            Console.WriteLine("last name");
            string lastName = Console.ReadLine();
            Console.WriteLine("department");
            string department = Console.ReadLine();
            Emploee user = new Emploee(fulltName, age, phoneNumber, firstName, lastName, department);
            user.Print();   
            //Emploee user = new Emploee();
            //Person liel = new Person("diamond factory", 5, 15978);
            //Building lod = new Building(2, 5, 9);
            //lod.printAll();
            //int[,] arrayNum = new int[8, 6];
            //string[,] arrayName = new string[3, 3]{
            //    {"liel" , "ofcvbnmer" , "Mya"},
            //    {"Ruby" , "Lujhjvgvbna" , "Ana "},
            //    {"Brooklyn" , "Aria" , "Victoria"}
            //};
            //Print(arrayNum);
            //MultiPrint(arrayNum);
            //PrintRandom(arrayNum);
            //PrintConsole(arrayNum);
            //Double(arrayNum); 
            //DoubleName(arrayName);
            //Teacher[,] teacher = new Teacher[4, 4]
            //{
            //    {91,8,2,9 },
            //    {4,8,2,9 },
            //    {4,8,2,9 },
            //    {8,2,5,7 }
            //};
            //int[,] arrayName = new int[6, 6];
            //arrayName[5, 3] = 6666;
            //for (int i = 0; i < arrayName.GetLength(0); i++)
            //{
            //    for (int j = 0; j < arrayName.GetLength(1); j++)
            //    {
            //        Random random = new Random();
            //        int generic = random.Next(10);
            //        arrayName[i, j]= generic;
            //        Console.Write($"name: {arrayName[i, j]}    ");
            //        Console.Write($" i: {i}   ");
            //        Console.Write($" j: {j}   ");
            //        Console.WriteLine();
            //    }
            //}


        }
        public static void DoubleName(string[,] arr)
        {
            for (int i = 0; i < arr.GetLength(0); i++)
            {
                //if (arr[i, 1++].Length > 4)
                //{
                for (int j = 0; j < arr.GetLength(1); j++)
                {
                    if (arr[i, j].Length > 4)
                    {
                        Console.Write($"name: {arr[i, 0]}    ");
                        Console.Write($" i: {i}   ");
                        Console.Write($" j: {j}   ");
                        Console.WriteLine();
                    }

                }
                //}
            }


        }
        public static void Double(int[,] arr)
        {
            for (int i = 0; i < arr.GetLength(0); i++)
            {
                if (i % 2 == 0)
                {
                    Console.Write($"i:{i}    ");

                    for (int j = 0; j < arr.GetLength(1); j++)
                    {
                        if (j % 2 == 0)
                        {
                            Console.Write($" j:{j}   ");

                        }

                    }
                }
                Console.WriteLine();

            }
        }

        public static void Print(int[,] num)
        {
            for (int i = 0; i < num.GetLength(0); i++)
            {
                Console.Write($"i:{i}    ");
                for (int j = 0; j < num.GetLength(1); j++)
                {
                    num[i, j] = j + 1;
                    Console.Write($" j={j}   ");
                    Console.Write($" (j:{num[i, j]})   ");
                }
                Console.WriteLine();
            }
        }
        public static void MultiPrint(int[,] num)
        {
            for (int i = 0; i < num.GetLength(0); i++)
            {
                Console.Write($"i:{i}    ");
                for (int j = 0; j < num.GetLength(1); j++)
                {
                    num[i, j] = j * i;
                    Console.Write($" j={j}   ");
                    Console.Write($" (j:{num[i, j]})   ");
                }
                Console.WriteLine();
            }
        }
        public static void PrintRandom(int[,] arr)
        {
            for (int i = 0; i < arr.GetLength(0); i++)
            {
                Console.Write($"i:{i}    ");

                for (int j = 0; j < arr.GetLength(1); j++)
                {
                    Random random = new Random();
                    int generic = random.Next(10);

                    Console.Write($" j={generic}   ");
                    Console.Write($" (j:{arr[i, j]})   ");

                }
            }
            Console.WriteLine();
        }
        public static void PrintConsole(int[,] arr)
        {
            for (int i = 0; i < arr.GetLength(0); i++)
            {
                Console.Write($"i:{i}    ");
                for (int j = 0; j < arr.GetLength(1); j++)
                {
                    arr[i, j] = j + 1;
                    Console.Write($" j={j}   ");
                    Console.Write($" (j:{arr[i, j]})   ");
                }
                Console.WriteLine();
            }

        }

    }
}