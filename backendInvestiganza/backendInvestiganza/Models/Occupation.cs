using System.ComponentModel.DataAnnotations;

namespace backendInvestiganza.Models
{
    public class Occupation
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }


        public virtual ICollection<Profile> Profiles { get; set; }

    }
}
