//Console.WriteLine("enter your first name");
//string FName = Console.ReadLine();
//Console.WriteLine("enter your last name");
//string LName = Console.ReadLine();
//FileStream fs = new FileStream(@"C:\Users\lieli\OneDrive\שולחן העבודה\javascript\c#\02.12.2021\someData.txt", FileMode.Append);
//using (StreamWriter writer = new StreamWriter(fs))
//{

//    writer.WriteLine($"user full name: {FName} {LName}");
//}
void addAge()
{
    Console.WriteLine("enter your age");
    int age = int.Parse(Console.ReadLine());
    FileStream addAge = new FileStream(@"C:\Users\lieli\OneDrive\שולחן העבודה\javascript\c#\02.12.2021\ages-file.txt", FileMode.Append);
    using (StreamWriter toWrite = new StreamWriter(addAge))
    {
        toWrite.WriteLine($"user age {age}");

    }
}
void addEmail()
{
    Console.WriteLine("enter your email");
    string email = Console.ReadLine();
    FileStream addEmail = new FileStream(@"C:\Users\lieli\OneDrive\שולחן העבודה\javascript\c#\02.12.2021\emails-file.txt", FileMode.Append);
    using (StreamWriter writer = new StreamWriter(addEmail))
    {
        if (email.Length > 5)
        {
            writer.WriteLine(email);

        }

    }
}

void addNumber()
{
    Console.WriteLine("enter your number");
    int number = int.Parse(Console.ReadLine());
    if (number > 5)
    {
        FileStream addNumber = new FileStream(@"C:\Users\lieli\OneDrive\שולחן העבודה\javascript\c#\02.12.2021\numbers-file.txt", FileMode.Create);
        using (StreamWriter writer = new StreamWriter(addNumber))
        {
            writer.WriteLine(number);
        }
    }
}
//אתגר
void bonus(string wereSave, string toSave)
{
    FileStream userFile = new FileStream(wereSave, FileMode.Append);
    using (StreamWriter writer = new StreamWriter(userFile))
    {
        writer.WriteLine(toSave);
    }

}
void readFiles()
{
    FileStream readTxt = new FileStream(@"C:\test\person.txt", FileMode.Open);
    using (StreamReader readFile = new StreamReader(readTxt))
    {
        Console.WriteLine(readFile.ReadLine());
    }
}
void printCar()
{
    FileStream cars = new FileStream(@"C:\test\cars.txt", FileMode.Open);
    using (StreamReader writer = new StreamReader(cars))
    {
        Console.WriteLine(writer.ReadToEnd());

    }
}

void savenumber(int num1, int num2)
{
    FileStream value = new FileStream(@"C:\test\cars.txt", FileMode.Append);
    using (StreamWriter writer = new StreamWriter(value))
    {
        writer.WriteLine(num1);
        writer.WriteLine(num2);
    }
}
void saveRandomNumber(int userNUmber)
{
    Random rnd = new Random();
    int raondomNumber = rnd.Next(10);
    if (raondomNumber == userNUmber)
    {
        FileStream addNumber = new FileStream(@"C:\Users\lieli\OneDrive\שולחן העבודה\javascript\c#\02.12.2021\numbers-file.txt", FileMode.Append);
        using (StreamWriter addNum = new StreamWriter(addNumber))
        {
            addNum.WriteLine(userNUmber);
        }

    }
    else
    {
        Console.WriteLine("sorry, not the same");
    }

}

int userNumber = int.Parse(Console.ReadLine());
saveRandomNumber(userNumber);
//savenumber(6,8);
//printCar();
//readFiles();
//bonus(@"C:\Users\lieli\OneDrive\שולחן העבודה\javascript\c#\02.12.2021\bonus-file.txt", "hello you" );
//addAge();
//addEmail();
//addNumber();
