List<int> num = new List<int>();
num.Add(5);
num.Add(3);
num.Add(6);
num.Add(9);


 void checkNameAngAge(int age, string name)
{

    try
    {
        if (age > 21)
        {
            Console.WriteLine("Must be over 21 years of age");
        }
        else
        {
            Console.WriteLine($"user name: {name},user age: {age}");
        }
    }
    catch (DivideByZeroException)
    {
        Console.WriteLine("its cant be a zero");
    }
    catch (FormatException)
    {
        Console.WriteLine("toy have problem with the format");
    }
    catch (Exception ex)
    {
        Console.WriteLine(ex.Message);
    }
}

checkNameAngAge(4,"lil");


























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

