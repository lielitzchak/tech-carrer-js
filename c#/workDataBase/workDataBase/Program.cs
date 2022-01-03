using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace workDataBase
{
    internal class Program
    {

        static void Main(string[] args)
        {
            string connectionString = "Data Source=LIEL-ITZCHAK;Initial Catalog=workDB;Integrated Security=True";

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                string query = @"SELECT *  FROM Employees";
                SqlCommand command = new SqlCommand(query, connection);
                SqlDataReader reader = command.ExecuteReader();
                if (reader.HasRows)
                {
                    while (reader.Read()) {
                        Console.WriteLine(reader.GetString(0));
                    }
                }
                else
                {
                    Console.WriteLine("no data");
                }

                connection.Close();

            }
            Console.ReadLine();



        }
    }
}
