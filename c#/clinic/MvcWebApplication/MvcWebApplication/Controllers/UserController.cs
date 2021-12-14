using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcWebApplication.Controllers
{
    public class UserController : Controller
    {
        // GET: User
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult USerName()
        {
            ViewBag.UserName = "liel";
            return View();
        }
        public ActionResult UserDetails()
        {
            ViewBag.UserDetails = new { firstName = "liel", LastName = "itzchak", age = "21" };
            return View();
        }
        public ActionResult AllUserDetails()
        {
            return View();
        }
        public ActionResult UsersNames()
        {
            ViewBag.UsersNames = new string[] { "omer", "liel", "shilat", "binjamin" };

            return View();
        }
        public ActionResult AllUsers()
        {
            object User1 = new { firstName = "omer", LastName = "itzchak", age = "23" };
            object User2 = new { firstName = "liel", LastName = "itzchak", age = "21" };
            object User3 = new { firstName = "shilat", LastName = "itzchak", age = "16" };
            object User4 = new { firstName = "binjamin", LastName = "itzchak", age = "14" };
            object User5 = new { firstName = "malachi", LastName = "itzchak", age = "8" };
            ViewBag.AllUsers = new object[] { User1, User2, User3, User4, User5 };

            return View();
        }
    }

}