using school;

List<User> usersList = new List<User>();
User newUser = new User("liel", "itzchak ", 2000, "liel@gmail.com");
Console.WriteLine(newUser.PrintAllDetails());
void AddAndPrintFourUser(List<User> ListOfUsers)
{
    int counter = 1;

    try
    {
        for (int i = 0; i < 4; i++)
        {
            Console.WriteLine($"user numbr {counter}");
            Console.Write(" First Name : ");
            string UserFirstName = Console.ReadLine();
            Console.Write(" Last Name : ");
            string UserLastname = Console.ReadLine();
            Console.Write("Birth Year : ");
            int UserBirth = int.Parse(Console.ReadLine());
            Console.Write("Email : ");
            string UserEmail = Console.ReadLine();
            User newUser = new User(UserFirstName, UserLastname, UserBirth, UserEmail);
            ListOfUsers.Add(newUser);
            counter++;
            ;

        }
        checkAge(ListOfUsers);
        PrintFile(ListOfUsers);
    }
    catch (FormatException)
    {
        Console.WriteLine("Please anter number");
        AddAndPrintFourUser(ListOfUsers);
    }
    catch (Exception)
    {
        Console.WriteLine("please Try Again.");
        AddAndPrintFourUser(ListOfUsers);

    }
}
void PrintFile(List<User> ListUsers)
{
    for (int i = 0; i < ListUsers.Count; i++)
    {
        FileStream fs = new FileStream($@"C:\Users\lieli\source\project in work C#\consoleUsers\files.txt", FileMode.Append);
        using (StreamWriter sw = new StreamWriter(fs))
        {

            sw.WriteLine($"Username: { ListUsers[i].FirstName} { ListUsers[i].LastName}\nBirth Year: { ListUsers[i].BirthYear}\nEmail: { ListUsers[i].Email}\n\n");
        }
    }
}
void checkAge(List<User> ListOfUsers)
{
    ListOfUsers.Sort();
    Console.WriteLine(ListOfUsers);
}
void PrintDataFromFile()
{
    FileStream fs = new FileStream($@"C:\Users\lieli\source\project in work C#\consoleUsers\files.txt", FileMode.Open);
    using (StreamReader sr = new StreamReader(fs))
    {
        Console.WriteLine(sr.ReadToEnd());
    }

}
void ReadFromFile(List<User> userList)
{
    try
    {
        FileStream fs = new FileStream(@"C: \Users\lieli\source\project in work C#\consoleUsers\files.txt", FileMode.Append);
        using (StreamReader sw = new StreamReader(fs))
        {
            for (int i = 0; i < userList.Count; i++)
                sw.Read();
            {

            }
        }
    }
    catch (FormatException)
    {
        Console.WriteLine("please try againe");
    }
    catch (FileNotFoundException)
    {
        Console.WriteLine("404");
    }
    catch (StackOverflowException)
    {
        Console.WriteLine("try again, its stack");
    }
    catch (Exception)
    {
        Console.WriteLine("some erroe");

    }
}
void startAppConsole()
{
    List<User> userList = new List<User>();
    try
    {
        Console.WriteLine("1. Add User\n2. Edit User\n3. Delete User\n4. Present User");
        int userNumber = int.Parse(Console.ReadLine());

        switch (userNumber)
        {
            case 1:
                AddUser(userList);
                break;
            case 2:
                EditUser(userList);
                break;
                //case 3:
                //    DeleteUser(userList);
                //    break;
                //case 4:
                //    displayUserInformation.(userList);
                //    break;
        }
    }
    catch (FormatException e)
    {
        Console.WriteLine(e.Message);
        startAppConsole();
    }
    catch (Exception e)
    {
        Console.WriteLine(e.Message + "(general)");
        startAppConsole();
    }
}

void EditUser(List<User> userList)
{
    try
    {
        Console.Write("What is the name for editing?");
        string NameEditing = Console.ReadLine();



        Console.WriteLine("What do you want to change?\n1. first name\n2. last name\n3. birth Year\n4. email");
        short userNumber = short.Parse(Console.ReadLine());
        switch (userNumber)
        {
            case 1:
                Console.Write("Enter First Name : ");
                string userName = Console.ReadLine();
                break;
            case 2:
                Console.Write("Enter Last Name : ");
                string userLName = Console.ReadLine();
                break;
            case 3:
                Console.Write("Enter Birth Year : ");
                int userBirth = int.Parse(Console.ReadLine());
                break;
            case 4:
                Console.Write("Enter Email : ");
                string userEmail = Console.ReadLine();
                break;
        }
    }
    catch (FormatException e)
    {
        Console.WriteLine(e.Message);
        EditUser(userList);
    }
    catch (Exception e)
    {
        Console.WriteLine(e.Message + "(general");
        EditUser(userList);
    }
}

void AddUser(List<User> userList)
{
    try
    {
        Console.Write("First Name:");
        string firstName = Console.ReadLine();
        Console.Write("Last Name:");
        string lastName = Console.ReadLine();
        Console.Write("Birth Year:");
        int birthYear = int.Parse(Console.ReadLine());
        Console.Write("Email:");
        string email = Console.ReadLine();
        User newUser = new User(firstName, lastName, birthYear, email);
    }
    catch (FormatException e)
    {
        Console.WriteLine(e.Message);
        AddUser(userList);
    }
    catch (Exception e)
    {
        Console.WriteLine(e.Message + "(general)");
        AddUser(userList);
    }
}
AddAndPrintFourUser(usersList);
Console.WriteLine("the all ended");
