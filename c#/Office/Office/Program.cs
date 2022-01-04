using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.SqlClient;
using System.Text;
using System.Threading.Tasks;

namespace Office
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<Mangers> listMangers = new List<Mangers>();
            List<contractor> listContractor = new List<contractor>();
            //List<Employee> listEmployees = new List<Employee>();
            string connectionString = @"Data Source=liel-itzchak;Initial Catalog=OfficeDataB;Integrated Security=True;Pooling=False";
            //PrintAllData(connectionString);
            //Console.ReadLine();
            //AddNewEmployee(connectionString);
            //UpadteDetailes(connectionString);
            //DeleteEmployee(connectionString);
            PrintAllDataMangers(connectionString);
            //AddNewManegers(connectionString);
            //UpadteDetailesManegers(connectionString);
            //DeleteMangers(connectionString);
            //PrintAllDataContractor(connectionString);
            Console.ReadLine();
            ;
        }
        public static void PrintAllDataContractor(string connectionString)
        {
            try
            {
                using (SqlConnection sqlConnection = new SqlConnection(connectionString))
                {
                    sqlConnection.Open();
                    string query = @"SELECT * FROM contractor";
                    SqlCommand cmd = new SqlCommand(query, sqlConnection);
                    SqlDataReader reader = cmd.ExecuteReader();
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            string data = $@"{reader.GetString(1) },{reader.GetInt32(2)},{reader.GetString(3)},{reader.GetString(4)}";
                            Console.WriteLine(data);
                        }
                    }
                    else
                    {
                        Console.WriteLine("no data");
                    }
                    sqlConnection.Close();
                }
            }
            //catch (SqlException)
            //{
            //}
            catch (Exception)
            {
                Console.WriteLine("Exception from me  :(");
            }
        }
        public static void DeleteMangers(string connectionString)
        {
            Console.WriteLine("UD you wand to delete?");
            int id = int.Parse(Console.ReadLine());
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                conn.Open();
                string query = $@"DELETE FROM Mangers WHERE Id={id};";
                SqlCommand cmd = new SqlCommand(query, conn);
                cmd.ExecuteNonQuery();
                conn.Close();

            }
        }
        public static void UpadteDetailesManegers(string connectionString)
        {
            Console.WriteLine("id to update?");
            int ID = int.Parse(Console.ReadLine());
            using (SqlConnection connectionDB = new SqlConnection(connectionString))
            {
                connectionDB.Open();

                Console.WriteLine("Full Name");
                string First_Name = Console.ReadLine();
                Console.WriteLine(" Last name");
                string Last_name = Console.ReadLine();
                Console.WriteLine("Birthday");
                string Birthday = Console.ReadLine();
                Console.WriteLine("classWork");
                string classWork = Console.ReadLine();

                string query = $@"UPDATE Mangers
                                                  SET First_Name='{First_Name}',Last_Name='{Last_name}',Birthday='{Birthday}' , ClassWork='{classWork}'
                                                  WHERE Id={ID};";
                SqlCommand command = new SqlCommand(query, connectionDB);
                command.ExecuteNonQuery();
                connectionDB.Close();
            }
        }
        public static void PrintAllDataMangers(string connectionString)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                //try
                //{
                connection.Open();
                string query = @"SELECT * FROM Manegers";
                SqlCommand commend = new SqlCommand(query, connection);
                SqlDataReader reader = commend.ExecuteReader();
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        string data = $@"{reader.GetString(1)} , {reader.GetString(2)} , {reader.GetString(3)}, {reader.GetString(4)},{reader.GetString(5)}";
                        Console.WriteLine(data);
                    }
                }
                else
                {
                    Console.WriteLine("sorry, no data");
                }

                connection.Close();
                //}
                //catch (SqlException)
                //{
                //    Console.WriteLine("Sql Exception");
                //}
                //catch (Exception ex)
                //{
                //    Console.WriteLine("exeption");
                //}
            }
        }
        public static void AddNewManegers(string connectionString)
        {
            try
            {
                Console.WriteLine("First Name");
                string First_Name = Console.ReadLine();
                Console.WriteLine("Last Name");
                string Last_Name = Console.ReadLine();
                Console.WriteLine("Birthday");
                string Birthday = Console.ReadLine();
                Console.WriteLine("Email");
                string Email = Console.ReadLine();
                Console.WriteLine("ClassWork");
                string ClassWork = Console.ReadLine();
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();

                    string query = $@"INSERT INTO Mangers (First_Name,Last_Name,Birthday ,Email ,ClassWork)
                                                      VALUES ('{First_Name}','{Last_Name}' , '{Birthday}' ,' {Email}', '{ClassWork}')";

                    SqlCommand commend = new SqlCommand(query, connection);
                    commend.ExecuteNonQuery();
                    connection.Close();
                }
            }
            catch (SqlException)
            {
                Console.WriteLine("Sql Exception");

            }
            catch (Exception)
            {
                Console.WriteLine("Exception");
            }



        }
        public static void PrintAllData(string connectionString)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            //חיבור לDB
            {
                try
                {
                    connection.Open();
                    string query = @"SELECT * FROM Employees";
                    SqlCommand commend = new SqlCommand(query, connection);
                    //הופך את השאילתה של הסטרינג למשהו שהSQL יודע לעבוד איתו
                    SqlDataReader reader = commend.ExecuteReader();
                    //מפעיל את השאילתה
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            string data = $@"{reader.GetString(1)} , {reader.GetValue(2)} , {reader.GetString(3)}, {reader.GetInt32(4)}";
                            Console.WriteLine(data);

                        }

                    }
                    else
                    {
                        Console.WriteLine("no data");
                    }

                    connection.Close();
                }
                catch (SqlException)
                {
                    Console.WriteLine("Sql Exception");
                }
                //catch (Exception)
                //{
                //    Console.WriteLine("Some Exception ");
                //}
            }
        }
        public static void AddNewEmployee(string connectionString)
        {
            try
            {
                Console.WriteLine("Full Name");
                string First_Name = Console.ReadLine();
                Console.WriteLine("Birthday");
                string Birthday = Console.ReadLine();
                Console.WriteLine("Email");
                string Email = Console.ReadLine();
                Console.WriteLine("Salary");
                int Salary = int.Parse(Console.ReadLine());
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    string query = $@"INSERT INTO Employees(Full_Name , Birthday , Email , Salary)
                                                    VALUES ('{First_Name}' , '{Birthday}' ,' {Email}', {Salary})";
                    SqlCommand commend = new SqlCommand(query, connection);
                    commend.ExecuteNonQuery();
                    connection.Close();
                }
            }
            catch (SqlException)
            {
                Console.WriteLine("Sql Exception");

            }
            catch (Exception)
            {
                Console.WriteLine("Exception");
            }


        }
        public static void UpadteDetailesEmployee(string connectionString)
        {
            Console.WriteLine("What is the ID?");
            int ID = int.Parse(Console.ReadLine());
            Console.WriteLine("Full Name");
            string First_Name = Console.ReadLine();
            Console.WriteLine("Birthday");
            string Birthday = Console.ReadLine();
            Console.WriteLine("Email");
            string Email = Console.ReadLine();
            Console.WriteLine("Salary");
            int Salary = int.Parse(Console.ReadLine());
            using (SqlConnection connection = new SqlConnection(connectionString))
            {

                connection.Open();
                string query = $@"UPDATE Employees
                                               SET Full_Name = '{First_Name}' , Birthday = '{Birthday}' , Email = '{Email}' , Salary={Salary}
                                               WHERE Id = {ID};";

                SqlCommand commend = new SqlCommand(query, connection);
                commend.ExecuteNonQuery();
                connection.Close();
            }
        }
        public static void DeleteEmployee(string connectionString)
        {
            Console.WriteLine("What is the ID?");
            int ID = int.Parse(Console.ReadLine());
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                string query = $@"DELETE  FROM Employees WHERE Id={ID} ";
                SqlCommand command = new SqlCommand(query, connection);
                command.ExecuteNonQuery();
                Console.WriteLine("deleted");
                Console.ReadLine();
                connection.Close();
            }


        }
    }
}


