using backendInvestiganza.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace backendInvestiganza.CombineModels
{
    [NotMapped]
    public class ProfileUser
    {
        public int Id { get; set; }
        public string ProfileImagePath { get; set; }
        public string CNIC { get; set; }
        public string Address { get; set; }
        public int ProvinceResidence { get; set; }
        public string ResidenceCity { get; set; }
        public string About { get; set; }


        public string Degree { get; set; }
        public string? OtherQualification { get; set; }
        public string OccupationName { get; set; }
        public string? OtherOccupation { get; set; }

        public string CategoryName { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public bool IsUserLocked { get; set;  }

    }
}
