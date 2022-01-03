using School.Models;
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
            return Json("liel", JsonRequestBehavior.AllowGet);
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
            //ViewBag.studentName = ;
            return Json(new string[] { "omer", " liel", "shilat", "binjamin ", "malachi", " moshe" }, JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetData()
        {
            return Json(new string[] { "liel", "omer", "shilat" }, JsonRequestBehavior.AllowGet);
        }
        public ActionResult EvenNumber()
        {

            return Json(NumberViewBag(), JsonRequestBehavior.AllowGet);

        }
        private List<int> NumberViewBag()
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
            return numbers;
        }
        public ActionResult CreateStudent()
        {
            Student student = new Student();
            ViewBag.Students = student;
            return Json(student, JsonRequestBehavior.AllowGet);
        }
        public ActionResult NewStudentModel()
        {
            Student newStudent = new Student();
            newStudent.BirthYear = 1999;
            newStudent.Classe = "dd";
            newStudent.LastName = "itzchak";
            newStudent.FirstName = "liel";
            return Json(newStudent, JsonRequestBehavior.AllowGet);
        }
        public ActionResult ShowStudentData()
        {
            return Json(UsersList(), JsonRequestBehavior.AllowGet);
        }
        private static List<Student> UsersList()
        {
            List<Student> students = new List<Student>();
            Student Student1 = new Student("omer", "itzchak", 2000, "ss");
            Student Student2 = new Student("liel", "itzchak", 2000, "ss");
            Student Student3 = new Student("shilat", "itzchak", 2000, "ss"); ;
            Student Student4 = new Student("binjamin", "itzchak", 2000, "ss");
            students.Add(Student1);
            students.Add(Student2);
            students.Add(Student3);
            students.Add(Student4);
            return students;
        }
    }
}

