using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProtfolioTryServer.Models
{
    public class Project
    {
        public int Id { get; set; }
        public string AppName { get; set; }
        public string Description { get; set; }
        public string imag { get; set; }
        public string techWorkWith { get; set; }
        public string LinkToGit { get; set; }
    }
}