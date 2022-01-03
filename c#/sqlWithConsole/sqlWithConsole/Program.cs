using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace sqlWithConsole
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<Person> list = new List<Person>();
            string connectionString = "Data Source=LIEL-ITZCHAK;Initial Catalog=testDB;Integrated Security=True;Pooling=False";
            addToDB(connectionString, list);
            foreach (Person person in list)
            {
                person.printData();
            }
            addPersonToTable(connectionString);

        }
        static void addToDB(string connectionString, List<Person> list)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    string query = @"SELECT * FROM Person";
                    SqlCommand command = new SqlCommand(query, connection);
                    SqlDataReader dataReader = command.ExecuteReader();
                    if (dataReader.HasRows)
                    {
                        list.Add(new Person("liel", "itzchak ", 21, "01-01-2021"));

                    }
                    else
                    {
                        Console.WriteLine("no data");
                    }


                    connection.Close();
                }

            }
            catch (SqlException sqlException)
            {
                Console.WriteLine(sqlException.Message);
            }
            catch (Exception)
            {
                Console.WriteLine("Exception- error");
            }
        }
        static void addPersonToTable(string stringConnection)
        {
            Console.WriteLine("Fisrt name");
            string firstName = Console.ReadLine();

            Console.WriteLine("Last Name");
            string LastName = Console.ReadLine();

            Console.WriteLine("age");
            int age = int.Parse(Console.ReadLine());

            Console.WriteLine("birthday");
            string birthday = Console.ReadLine();
            try
            {
                using (SqlConnection connection = new SqlConnection(stringConnection))
                {
                    connection.Open();
                    string query = $@" INSERT INTO Person (firstName,LastName , age ,birthday) 
                                                       VALUES ('{firstName}' , '{LastName}' ,{age},'{birthday}')";
                    SqlCommand command = new SqlCommand(query, connection);
                    command.ExecuteNonQuery();
                    connection.Close();
                }

            }
            catch (SqlException sqlException)
            {
                Console.WriteLine(sqlException.Message);
            }
            catch (Exception) { Console.WriteLine("Exception"); }
        }
    }
}
