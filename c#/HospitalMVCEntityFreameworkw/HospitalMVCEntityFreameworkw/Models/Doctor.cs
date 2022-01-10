using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HospitalMVCEntityFreameworkw.Models
{
    public class Doctor
    {
        public int Id { get; set; }
        public string NameDoctor { get; set; }
        public DateTime Birthday { get; set; }
        public int Phone { get; set; }
        public int NumberPatient { get; set; }
    }
}