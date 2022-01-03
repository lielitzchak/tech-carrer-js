﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Factory.Controllers
{
    public class InspectorController : Controller
    {
        // GET: Inspector
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult ShowName()
        {
            ViewBag.Name = "omer";
            return View();
        }
        public ActionResult ShowInspector()
        {
            return View();
        }
        public ActionResult ShowInspectorNames()
        {
            string[] workersName = new string[] { "orly", "moshe", "shilat", "binjamin", "malachi", "oz" };
            return View(workersName);
        }
        public ActionResult ShowInspectors()
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