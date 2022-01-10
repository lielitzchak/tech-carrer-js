using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;

namespace HospitalMVCEntityFreameworkw.Models
{
    public partial class HospitalContext : DbContext
    {

        public HospitalContext()
            : base("name=HospitalContext")
        {
        }
        public DbSet<Doctor> Doctors { get; set; }
        public DbSet<Patient> Patients { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }
    }
}
