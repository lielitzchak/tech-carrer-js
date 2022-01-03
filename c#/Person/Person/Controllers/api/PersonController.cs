using Microsoft.AspNetCore.Cors;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PersonAplication.Models;
namespace PersonAplication.Controllers.API
{

    public class PersonController : Controller
    {
        List<PersonClass> dbPerson = new List<PersonClass>();
        public void popPeople()
        {
            PersonClass[] people = new PersonClass[] {
            new PersonClass("omer", "itzchak", 14, "liel@gmail.com") ,
            new PersonClass("liel", "itzchak", 4, "liel@gmail.com") ,
            new PersonClass("shilat", "itzchak", 10, "liel@gmail.com"),
            new PersonClass("binjamin", "itzchak", 23, "liel@gmail.com"),
            new PersonClass("malachi", "itzchak", 41, "liel@gmail.com") ,
        };
            this.dbPerson.AddRange(people);
        }
        // GET: Person
        public ActionResult Index()
        {
            popPeople();
            return Json(dbPerson, JsonRequestBehavior.AllowGet);
        }

        // GET: Person/Details/5
        public ActionResult Details(string Fname)
        {

            return View();
        }

        // POST: Person/Create
        [HttpPost]
        public ActionResult Create(PersonClass collection)
        {
            dbPerson.Add(collection);
            return Json(dbPerson, JsonRequestBehavior.AllowGet);
        }

        // PUT: Person/Edit/5
        [HttpPut]
        public ActionResult Edit(int id, PersonClass userCollection)
        {
            foreach (PersonClass user in dbPerson)
            {
                if (user.Id == id)
                {
                    user.Fname = userCollection.Fname;
                    user.Lname = userCollection.Lname;
                    user.Age = userCollection.Age;
                    user.Email = userCollection.Email;
                    return Json("good", JsonRequestBehavior.AllowGet);
                }
                return Json("not good", JsonRequestBehavior.AllowGet);
            }
            return Json("not good", JsonRequestBehavior.AllowGet);
        }

        // DELETE: Person/Delete/5
        [HttpDelete]
        public ActionResult Delete(string Lname)
        {
            string massage = "cant find this detaile";
            for (int i = 0; i < this.dbPerson.Count; i++)
            {
                if (dbPerson[i].Lname == Lname)
                {
                    dbPerson.RemoveAt(i);
                    massage = "deleted";
                    break;

                }
            }

            return Json(massage, JsonRequestBehavior.AllowGet);
        }

    }
}
