using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backendInvestiganza.Models
{
    public class Profile
    {
        [Key]
        public int Id { get; set; }
        public string? ProfileImagePath { get; set; }

        [NotMapped]
        public IFormFile? ImageFile { get; set; }

        public string CNIC { get; set; }
        public string Address { get; set; }
        public int ProvinceResidence { get; set; }

        [ForeignKey("ResidenceCity")]
        public int ResidenceCityId { get; set; }
        public virtual City? ResidenceCity { get; set; }
        public string About { get; set; }


        public string Degree { get; set; }
        public string? OtherQualification { get; set; }


        [ForeignKey("Occupation")]
        public int OccupationId { get; set; }
        public virtual Occupation? Occupation { get; set; }
        public string? OtherOccupation { get; set; }




        [ForeignKey("Category")]
        public int CategoryId { get; set; }
        public virtual Category? Category { get; set; }


        [ForeignKey("User")]
        public string UserId { get; set; }
        public virtual ApplicationUser? User { get; set; }

        //public int CategoryId1 { get; set; }

        public bool IsProfileApproved { get; set; } = false;


    }
}
