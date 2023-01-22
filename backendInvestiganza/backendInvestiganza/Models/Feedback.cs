using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backendInvestiganza.Models
{
    public class Feedback
    {
        [Key]
        public int Id { get; set; }
        public string Message { get; set; }
        [ForeignKey("User")]
        public string UserId { get; set; }
        public virtual ApplicationUser? User { get; set; }
        [ForeignKey("Profile")]
        public int ProfileId { get; set; }
        public virtual Profile? Profile { get; set; }


    }
}
