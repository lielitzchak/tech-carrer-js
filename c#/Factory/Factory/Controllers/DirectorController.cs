using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Factory.Controllers
{
    public class DirectorController : Controller
    {
        // GET: Director
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult ShowName()
        {
            ViewBag.Name = "itzchak";
            return View();
        }
        public ActionResult ShowDirector()
        {
            return View();
        }
        public ActionResult ShowDirectorNames()
        {
            string[] workersName = new string[] { "abi", "meir", "dani", "lev", "dbir", "asaf" };
            return View(workersName);
        }
        public ActionResult ShowDirectors()
        {
            return View();
        }
        public ActionResult ShowAllEmployees()
        {

            ViewBag.name = "omer";
            ViewBag.LastName = "shalem";
            ViewBag.birth = 2000;
            ViewBag.phone = 547080093;

            return View();
        }
    }
}