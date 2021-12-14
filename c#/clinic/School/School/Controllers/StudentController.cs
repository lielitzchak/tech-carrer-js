using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace School.Controllers
{
    public class StudentController : Controller
    {
        // GET: Student
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult StudentName()
        {
            ViewBag.UserNames = " lielItzchak";
            return View();
        }
        public ActionResult ShowStudent()
        {
            return View();
        }
        public ActionResult ShowStudentNames()
        {
            return View();
        }
        public ActionResult ShowStudents()
        {
            ViewBag.studentName = new string[] { "omer", " liel", "shilat", "binjamin ", "malachi", " moshe" };
            return View();
        }
        public JsonResult GetData()
        {
            return Json(new string[] { "liel", "omer", "shilat" }, JsonRequestBehavior.AllowGet);
        }
        public ActionResult EvenNumber()
        {
            List<int> numbers = new List<int>();
            int rnd = new Random().Next(50);
            for (int i = 0; i < 10; i++)
            {
                if (rnd % 2 == 0)
                {
                    numbers.Add(rnd);
                }
            }
            ViewBag.Nmbers = numbers;
            return View();

        }
        public ActionResult CreateStudent() 
        {
            return View(); 
        }
    }
}
