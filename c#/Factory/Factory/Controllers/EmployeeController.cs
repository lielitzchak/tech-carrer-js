using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Factory.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Employee
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult ShowName()
        {
            ViewBag.Name = "Liel";
            return View();
        }
        public ActionResult ShowEmployee()
        {
            return View();
        }
        public ActionResult ShowEmployeeNames()
        {
            string[] workersName = new string[] { "amir", "Liel", "avi", "beni", "jacob", "stav" };
            return View(workersName);
        }
        public ActionResult ShowEmployees()
        {
            return View();
        }
        public ActionResult ShowAllEmployees()
        {

            ViewBag.name = "leil";
            ViewBag.LastName = "itzchak";
            ViewBag.birth = 2000;
            ViewBag.phone = 547080093;

            return View();
        }
    }
}
