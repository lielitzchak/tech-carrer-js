using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace School.Controllers
{
    public class ManagerController : Controller
    {
        // GET: Manager
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult ManagerName() { return View(); }
        public ActionResult ShowManager() { return View(); }
        public ActionResult ShowManagerName() { return View(); }
        public ActionResult ShowManagersNames() { return View(); }
    }
}