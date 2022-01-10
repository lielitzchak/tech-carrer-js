using HospitalMVCEntityFreameworkw.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace HospitalMVCEntityFreameworkw.Controllers.API
{
    public class PatientsController : ApiController
    {
        HospitalContext HospitalDB = new HospitalContext();
        // GET: api/Patients
        public IHttpActionResult Get()
        {
            try
            {
                List<Patient> patients = HospitalDB.Patients.ToList();
                return Ok(new { patients });
            }

            catch (Exception)
            {
                return BadRequest("error");
            }

        }

        // GET: api/Patients/5
        public async Task<IHttpActionResult> Get(int id)
        {
            try
            {
                Patient patient = await HospitalDB.Patients.FindAsync(id);
                return Ok(new { patient });
            }

            catch (Exception)
            {
                return BadRequest("error");
            }

        }

        // POST: api/Patients
        public async Task<IHttpActionResult> Post([FromBody] Patient patient)
        {
            try
            {
                HospitalDB.Patients.Add(patient);
                await HospitalDB.SaveChangesAsync();
                return Ok("saved");
            }

            catch (Exception)
            {
                return BadRequest("error");
            }

        }

        // PUT: api/Patients/5
        public async Task<IHttpActionResult> Put(int id, [FromBody] Patient patient)
        {
            try
            {
                Patient changPpatient = HospitalDB.Patients.Single((item) => item.Id == id);
                changPpatient.NamePatient = patient.NamePatient;
                changPpatient.Birthday = patient.Birthday;
                changPpatient.BeginningHospitalization = patient.BeginningHospitalization;
                changPpatient.Phone = patient.Phone;
                changPpatient.NumberPatient = patient.NumberPatient;
               await HospitalDB.SaveChangesAsync();
                return Ok("saved changes");
            }

            catch (Exception)
            {
                return BadRequest("error");
            }

        }

        // DELETE: api/Patients/5
        public async Task<IHttpActionResult> Delete(int id)
        {
            try
            {
                Patient patient = HospitalDB.Patients.Single((item) => item.Id == id);
                HospitalDB.Patients.Remove(patient);
              await  HospitalDB.SaveChangesAsync();
                return Ok("deleted");
            }

            catch (Exception)
            {
                return BadRequest("error");
            }


        }
    }
}
