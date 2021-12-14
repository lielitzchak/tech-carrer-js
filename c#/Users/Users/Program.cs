namespace school
{
    class Program
    {
        //static void Main(string[] args)
        //{
        //    List<User> UserList = new List<User>();

        //    UsersProgram(UserList);
        //    OpenProgram();
        //    UserList.Sort();
        //    for (int i = 0; i < UserList.Count; i++)
        //    {
        //        UserList[i].PrintAll();
        //    }

        //    SaveDataFiles(UserList);
        //    PrintDataFromFile();
        //    SaveUserToFile(UserList);
        //}

        static void UsersProgram(List<User> usersList)
        {
            try
            {
                Console.WriteLine("Please enter 4 new users.\nPlease enter at the right order of :\nFirst Name, Last Name, Birth Year, Email.\n");
                for (int i = 0; i < 4; i++)
                {
                    Console.WriteLine($"user numbr {i}");
                    Console.Write(" First Name : ");
                    string UserFirstName = Console.ReadLine();
                    Console.Write(" Last Name : ");
                    string UserLastname = Console.ReadLine();
                    Console.Write("Birth Year : ");
                    int UserBirth = int.Parse(Console.ReadLine());
                    Console.Write("Email : ");
                    string UserEmail = Console.ReadLine();
                    User newUser = new User(UserFirstName, UserLastname, UserBirth, UserEmail);
                    usersList.Add(newUser);

                }

            }
            catch (FormatException ex)
            {
                Console.WriteLine(ex.Message);
                UsersProgram(usersList);
            }
            catch (StackOverflowException ex)
            {
                Console.WriteLine(ex.Message);
                UsersProgram(usersList);
            }
            catch
            {
                Console.WriteLine("please Try Again.");
                UsersProgram(usersList);
            }
        }

        static void SaveDataFiles(List<User> usersList1)
        {
            FileStream fs = new FileStream(@"C:\Users\lieli\OneDrive\שולחן העבודה\javascript\c#\school\data.txt", FileMode.Append);
            using (StreamWriter sw = new StreamWriter(fs))
            {
                for (int i = 0; i < usersList1.Count; i++)
                {
                    sw.WriteLine($"{usersList1[i].PrintAll()}");
                }
            }
        }

        static void PrintDataFromFile()
        {
            FileStream fs = new FileStream(@"C:\Users\lieli\OneDrive\שולחן העבודה\javascript\c#\school\data.txt", FileMode.Open);
            using (StreamReader sr = new StreamReader(fs))
            {
                Console.WriteLine(sr.ReadToEnd());
            }
        }

        static void SaveUserToFile(List<User> userList2)
        {
            for (int i = 0; i < userList2.Count; i++)
            {
                FileStream fs = new FileStream($@"C:\Users\lieli\OneDrive\שולחן העבודה\javascript\c#\school\files\{userList2[i].firstName}-{userList2[i].lastName}.txt", FileMode.Create);
                using (StreamWriter sw = new StreamWriter(fs))
                {
                    sw.WriteLine($"Username - { userList2[i].firstName} { userList2[i].lastName}\nBirth Year - { userList2[i].birthYear}\nEmail - { userList2[i].email}");
                }
            }
        }

        static void OpenProgram()
        {
            List<User> userList3 = new List<User>();
            try
            {
                Console.WriteLine("Hello User\nChoose Option :\n1. Add User\n2. Edit User\n3. Delete User\n4. Present User");
                short userPick = short.Parse(Console.ReadLine());

                switch (userPick)
                {
                    case 1:
                        AddUser(userList3);
                        break;
                    case 2:
                        EditUser(userList3);
                        break;
                    case 3:
                        RemoveUser(userList3);
                        break;
                    case 4:
                        GetUser(userList3);
                        break;
                }
            }
            catch (FormatException e)
            {
                Console.WriteLine($"{e.Message} Try Again");
                OpenProgram();
            }
            catch
            {
                Console.WriteLine("Unknown Error. Try Again.");
                OpenProgram();
            }
        }

        static void AddUser(List<User> usersList4)
        {
            Console.WriteLine("Add User : ");
            try
            {
                Console.Write("Enter First Name : ");
                string firstNameInput = Console.ReadLine();
                Console.Write("Enter Last Name : ");
                string lastNameInput = Console.ReadLine();
                Console.Write("Birth Year : ");
                int birthYearInput = int.Parse(Console.ReadLine());
                Console.Write("Email : ");
                string emailInput = Console.ReadLine();
                User newUser = new User(firstNameInput, lastNameInput, birthYearInput, emailInput);
                usersList4.Add(newUser);
            }
            catch (FormatException e)
            {
                Console.WriteLine($"{e.Message} Try Again.");
                AddUser(usersList4);
            }
            catch
            {
                Console.WriteLine($"Unknown Error. Try Again.");
                AddUser(usersList4);
            }
        }

        static void EditUser(List<User> usersList5)
        {
            try
            {
                Console.Write("Edit User\nEnter User Name : ");
                string userInput = Console.ReadLine();

                int result = CheckForUser(userInput, usersList5);

                if (result == -1) Console.WriteLine("No User Been Found");
                else
                {
                    Console.WriteLine("What do you want to change?\n1. First Name\n2. Last Name\n3. Birth Year\n4. Email");
                    short userPick = short.Parse(Console.ReadLine());

                    switch (userPick)
                    {
                        case 1:
                            Console.Write("Enter First Name : ");
                            string userNameInput = Console.ReadLine();
                            usersList5[result].firstName = userNameInput;
                            break;
                        case 2:
                            Console.Write("Enter Last Name : ");
                            string userLNameInput = Console.ReadLine();
                            usersList5[result].lastName = userLNameInput;
                            break;
                        case 3:
                            Console.Write("Enter Birth Year : ");
                            int userBirthYInput = int.Parse(Console.ReadLine());
                            usersList5[result].birthYear = userBirthYInput;
                            break;
                        case 4:
                            Console.Write("Enter Email : ");
                            string userEmailInput = Console.ReadLine();
                            usersList5[result].email = userEmailInput;
                            break;
                    }
                }
            }
            catch (FormatException e)
            {
                Console.WriteLine($"{e.Message} Try Again.");
                EditUser(usersList5);
            }
            catch (StackOverflowException e)
            {
                Console.WriteLine($"{e.Message} Try Again.");
                EditUser(usersList5);
            }
            catch
            {
                Console.WriteLine("Unknown Error. Try Again.");
                EditUser(usersList5);
            }
        }

        static int CheckForUser(string name, List<User> usersList6)
        {
            for (int i = 0; i < usersList6.Count; i++)
            {
                if (name.ToLower() == usersList6[i].firstName.ToLower()) return i;
            }
            return -1;
        }

        static void RemoveUser(List<User> usersList7)
        {
            try
            {
                Console.Write("Delete User\nEnter User Name : ");
                string userInput = Console.ReadLine();

                int result = CheckForUser(userInput, usersList7);

                if (result == -1) Console.WriteLine("No User Been Found");
                else
                {
                    for (int i = 0; i < usersList7.Count; i++)
                    {
                        if (usersList7[i].firstName.ToLower() == userInput.ToLower()) usersList7.RemoveAt(i);
                    }
                }
            }
            catch (FormatException e)
            {
                Console.WriteLine($"{e.Message} Try Again.");
                RemoveUser(usersList7);
            }
            catch (StackOverflowException e)
            {
                Console.WriteLine($"{e.Message} Try Again.");
                RemoveUser(usersList7);
            }
            catch
            {
                Console.WriteLine("Unknown Error. Try Again.");
                RemoveUser(usersList7);
            }
        }

        static void GetUser(List<User> usersList8)
        {
            try
            {
                Console.Write("Present User\nEnter User Name : ");
                string userInput = Console.ReadLine();

                int result = CheckForUser(userInput, usersList8);

                if (result == -1) Console.WriteLine("No User Been Found");
                else
                {
                    for (int i = 0; i < usersList8.Count; i++)
                    {
                        if (userInput.ToLower() == usersList8[i].firstName.ToLower()) Console.WriteLine(usersList8[i].PrintAll());
                    }
                }
            }
            catch (FormatException e)
            {
                Console.WriteLine($"{e.Message} Try Again.");
                GetUser(usersList8);
            }
            catch (StackOverflowException e)
            {
                Console.WriteLine($"{e.Message} Try Again.");
                GetUser(usersList8);
            }
            catch
            {
                Console.WriteLine("Unknown Error. Try Again.");
                GetUser(usersList8);
            }
        }
    }
}