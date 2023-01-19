using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backendInvestiganza.Models
{
    public class Proposal
    {
        [Key]
        public int Id { get; set; }
        public float Amount { get; set; }
        public string Message { get; set; }

        [ForeignKey("Post")]
        public int PostId { get; set; }
        public virtual Post? Post { get; set; }

        [ForeignKey("User")]
        public string UserId { get; set; }
        public virtual ApplicationUser? User { get; set; }

    }
}
