using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace School.Controllers
{
    public class TeacherController : Controller
    {
        // GET: Teacher
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult TeacherName()
        {

            ViewBag.Title = "omer";
            return View();

        }
        public ActionResult ShowTeacher()
        {
            return View();
        }
        public ActionResult ShowTeacherNames()
        {

            ViewBag.TeacherNames = new string[] { "omer", " liel", "shilat", "binjamin ", "malachi", " moshe" };
            return View();
        }
        public ActionResult ShowStudents()
        {
            return View();
        }
        
    }
}