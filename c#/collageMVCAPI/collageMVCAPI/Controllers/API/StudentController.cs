using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using collageMVCAPI.Models;


namespace collageMVCAPI.Controllers.API
{
    public class StudentController : ApiController
    {
        string connectionString = @"Data Source=LIEL-ITZCHAK;Initial Catalog=collageDB;Integrated Security=True";
        // GET: api/Student
        public IHttpActionResult Get()
        {
            List<Student> list = GetAllData(connectionString);
            return Ok(new { list });
        }
        // GET: api/Student/5
        public IHttpActionResult Get(int id)
        {
            Student student = GetStudent(connectionString, id);
            return Ok(new { student });
        }
        // POST: api/Student
        public IHttpActionResult Post([FromBody] Student newStudent)
        {
            Student student = AddStudent(connectionString, newStudent);
            return Ok(new { student });
        }
        // PUT: api/Student/5
        public void Put(int id, [FromBody] Student value)
        {
            UpdateStudent(connectionString, id, value);
        }
        // DELETE: api/Student/5
        public void Delete(int id)
        {
            DeletEStudent(connectionString, id);
        }
        static List<Student> GetAllData(string connectionString)
        {
            List<Student> listStudent = new List<Student>();
            try
            {
                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    conn.Open();
                    string query = $@"SELECT * FROM Student";
                    SqlCommand cmd = new SqlCommand(query, conn);
                    SqlDataReader reader = cmd.ExecuteReader();
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            listStudent.Add(new Student(reader.GetString(1), reader.GetString(2), reader.GetString(3), reader.GetString(3), reader.GetInt32(5)));
                        }
                        return listStudent;
                    }
                    else
                    {
                        Console.WriteLine("sorry,no data");
                        return listStudent;
                    }
                    conn.Close();
                    return listStudent;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        static Student GetStudent(string connectionString, int idStudent)
        {
            try
            {
                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    conn.Open();
                    string query = $@"SELECT * FROM student 
                                                   WHERE Id = {idStudent};";
                    SqlCommand cmd = new SqlCommand(query, conn);
                    SqlDataReader reader = cmd.ExecuteReader();
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            return new Student(reader.GetString(1), reader.GetString(2), reader.GetString(3), reader.GetString(3), reader.GetInt32(5));
                        }
                    }
                    conn.Close();
                    return new Student();
                }
            }
            catch (Exception)
            {
                throw;
            }

        }
        static Student AddStudent(string connectionString, Student newStudent)
        {
            try
            {
                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    conn.Open();

                    string query = $@"INSERT INTO  Student (First_name , Last_Name , Birthday , Email , schoolYears)  
                    VALUES ( '{newStudent.FirstName}' , '{newStudent.LastName}' , '{newStudent.Birthday}' , '{newStudent.Email}' ,5); ";
                    SqlCommand cmd = new SqlCommand(query, conn);
                    cmd.ExecuteNonQuery();
                    conn.Close();
                }
                return newStudent;
            }
            catch (Exception)
            {
                throw;
            }

        }
        static void UpdateStudent(string connectionString, int id, Student student)
        {
            try
            {
                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    conn.Open();
                    string query = $@"update Student
                                                       SET First_name='{student.FirstName}'  ,Last_Name='{student.LastName}',Birthday='{student.Birthday}',Email='{student.Email}',schoolYears={student.SchoolYears}
                                                       WHERE Id={id};";

                    SqlCommand command = new SqlCommand(query, conn);
                    command.ExecuteNonQuery();
                    conn.Close();


                }
            }
            catch (Exception)
            {
                throw;
            }

        }
        static void DeletEStudent(string connectionString, int Id)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    string query = $@"DELETE FROM Student WHERE Id = {Id};";
                    SqlCommand cmd = new SqlCommand(query, connection);
                    cmd.ExecuteNonQuery();
                    connection.Close();
                }
            }
            catch (Exception)
            {
                throw;
            }

        }
    }
}
