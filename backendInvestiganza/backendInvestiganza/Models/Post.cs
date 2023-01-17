using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backendInvestiganza.Models
{
    public class Post
    {
        [Key]
        public int Id { get; set; }
        public string Subject { get; set; }
        public string Description { get; set; }
        public float Amount { get; set; }
        public DateTime Date { get; set; } = DateTime.Now.Date;
        public string? DocumentPath { get; set; }

        [NotMapped]
        public IFormFile? Document { get; set; }
        [NotMapped]
        public List<IFormFile>? Images { get; set; }
        [ForeignKey("CategoryId")]
        public int CategoryId { get; set; }
        public virtual Category? Category { get; set; }
        [ForeignKey("User")]
        public string UserId { get; set; }
        public virtual ApplicationUser? User { get; set; }
    }
}
