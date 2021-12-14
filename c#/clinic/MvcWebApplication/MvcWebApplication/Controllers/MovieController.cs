using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcWebApplication.Controllers
{
    public class MovieController : Controller
    {
        // GET: Movie
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult About()
        {
            ViewBag.Title = "this is title";
            return View();
        }
        public ActionResult MovieList()
        {
            ViewBag.MovieList = new string[] { "Step Brothers", "Life", "Jumanji", "Stepmom" };
            return View();
        }
    }
}