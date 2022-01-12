using Garage.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Garage.Controllers.API
{
    public class CarController : ApiController
    {
        string stringConnection = @"Data Source=LIEL-ITZCHAK;Initial Catalog=garageDB;Integrated Security=True;Pooling=False;MultipleActiveResultSets=True;Application Name=EntityFramework";
        GarageContext garageContext = new GarageContext();

        // GET: api/Car
        public IHttpActionResult Get()
        {
            try
            {
                List<Car> cars = garageContext.Cars.ToList();
                return Ok(new { cars });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        // GET: api/Car/5
        public IHttpActionResult Get(int id)
        {
            try
            {
                Car idCar = garageContext.Cars.First((item) => item.Id == id);
                return Ok(new { idCar });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        // POST: api/Car
        public IHttpActionResult Post([FromBody] Car car)
        {
            try
            {
                garageContext.Cars.Add(car);
                garageContext.SaveChanges();
                return Ok("saved");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        // PUT: api/Car/5
        public IHttpActionResult Put(int id, [FromBody] Car car)
        {
            try
            {
                Car changeCar = garageContext.Cars.First(item => item.Id == id);
                changeCar.Owner = car.Owner;
                changeCar.CarNumber = car.CarNumber;
                changeCar.CorrectionStatus = car.CorrectionStatus;
                return Ok("saved");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        // DELETE: api/Car/5
        public IHttpActionResult Delete(int id)
        {
            try
            {
                Car deleteCar = garageContext.Cars.First(car => car.Id == id);
                garageContext.Cars.Remove(deleteCar);
                return Ok("delete");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
    }
}
