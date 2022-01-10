using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HospitalMVCEntityFreameworkw.Models
{
    public class Patient
    {
        public int Id { get; set; }
        public string NamePatient { get; set; }
        public DateTime Birthday { get; set; }
        public DateTime BeginningHospitalization { get; set; }
        public int Phone { get; set; }
        public int NumberPatient { get; set; }
    }
}