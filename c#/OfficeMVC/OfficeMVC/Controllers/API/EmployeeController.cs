﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using OfficeMVC.Models;

namespace OfficeMVC.Controllers.API
{
    public class EmployeeController : ApiController
    {
        // GET: api/Employee
        public IHttpActionResult Get()
        {
            List<Employee> listEmployee = new List<Employee>();
            return Ok();
        }

        // GET: api/Employee/5
        public string Get(int id)
        {

            return "value";
        }

        // POST: api/Employee
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Employee/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Employee/5
        public void Delete(int id)
        {
        }
    }
}
