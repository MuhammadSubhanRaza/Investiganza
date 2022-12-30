using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backendInvestiganza.Models
{
    public class City
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public int Province { get; set; }


        public virtual ICollection<Profile> Profiles { get; set; }

        //public virtual ICollection<Profile> OccupationProfiles { get; set; }

    }
}
