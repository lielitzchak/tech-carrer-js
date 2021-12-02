using System;
using System.Collections.Generic;
using System.Linq;


//namespace ExceptionProgramApp
//{
using ExceptionProgramApp;

//List<int> num = new List<int>();
//num.Add(5);
//num.Add(3);
//num.Add(6);
//num.Add(9);


// void checkNameAngAge(int age, string name)
//{

//    try
//    {
//        if (age > 21)
//        {
//            Console.WriteLine("Must be over 21 years of age");
//        }
//        else
//        {
//            Console.WriteLine($"user name: {name},user age: {age}");
//        }
//    }
//    catch (DivideByZeroException)
//    {
//        Console.WriteLine("its cant be a zero");
//    }
//    catch (FormatException)
//    {
//        Console.WriteLine("toy have problem with the format");
//    }
//    catch (Exception ex)
//    {
//        Console.WriteLine(ex.Message);
//    }
//}

//checkNameAngAge(4,"lil");

//! \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//משימות בית 
//Square<int, int, int, float> numbers1 = new Square<int, int, int, float>(8, 4, 5, 2);
//Square<int, float, double, int> numbers2 = new Square<int, float, double, int>(2, 5, 8, 9);    
//משימת List 

//רשימה זה סוג של מערך

//List<string> family = new List<string>();
//family.Add("itzchak");
//family.Add("chekol");
//family.Add("moshe");
//family.Add("or");
//family.Add("ashtamker");
//family.Sort((a, b) => a.Length.CompareTo(b.Length));

//family.ForEach(x => Console.WriteLine(x));


//משימת בנק 














//static void ifNameBigNum(int num, string someName)
//{
//    if (num > someName.Length)
//    {
//        throw new ArgumentException("it not good function");
//    } else
//    {
//    Console.WriteLine($"number: {num},  name: {someName}");

//    }
//}

//try
//{
//    Console.WriteLine("enter numer");
//    //Console.WriteLine("number");
//    int num = int.Parse(Console.ReadLine());
//    num = 5 / num;
//    //Console.WriteLine(num);
//    //Console.WriteLine("string");
//    ifNameBigNum(77,"liel");
//    ifNameBigNum(2,"l");

//}
//catch (FormatException)
//{
//    Console.WriteLine("value must be number");

//}
//catch (DivideByZeroException)
//{
//    Console.WriteLine("can't divide by zero");

//}
//catch (ArgumentException ex)
//{
//    Console.WriteLine(ex.Message);
//}

//}