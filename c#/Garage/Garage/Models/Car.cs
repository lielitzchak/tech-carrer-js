using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Garage.Models
{
    public class Car
    {
        public int Id { get; set; }
        public string Owner { get; set; }
        public int CarNumber { get; set; }
        public string CorrectionStatus { get; set; }

    }
}