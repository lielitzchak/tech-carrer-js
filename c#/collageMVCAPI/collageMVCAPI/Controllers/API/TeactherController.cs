using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.SqlClient;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using collageMVCAPI.Models;

namespace collageMVCAPI.Controllers.API
{
    public class TeactherController : ApiController
    {
        string connectionString = @"Data Source=LIEL-ITZCHAK;Initial Catalog=collageDB;Integrated Security=True";

        // GET: api/Teacther
        public IHttpActionResult Get()
        {
            Teacther Teacther = GetAllTeactherData(connectionString);
            return Ok(new { Teacther });
        }

        // GET: api/Teacther/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Teacther
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Teacther/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Teacther/5
        public void Delete(int id)
        {
            DeleteTeacther(connectionString, id);
        }
        private static Teacther GetAllTeactherData(string connectionString)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                string query = $@"SELECT * FROM Teacther;";
                SqlCommand cmd = new SqlCommand(query, connection);
                SqlDataReader dr = cmd.ExecuteReader();
                if (dr.HasRows)
                {
                    while (dr.Read())
                    {
                        return new Teacther();
                    }
                }

                connection.Close();
            }
            return new Teacther();
        }

        private static void DeleteTeacther(string connectionString, int Id)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                string query = $@"DELETE FROM Teacther WHERE Id = {Id};";
                SqlCommand cmd = new SqlCommand(query, connection);
                cmd.ExecuteNonQuery();
                connection.Close();
            }
        }

    }
}
