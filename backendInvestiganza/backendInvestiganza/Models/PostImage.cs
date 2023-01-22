using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backendInvestiganza.Models
{
    public class PostImage
    {
        [Key]
        public int Id { get; set; }
        public string ImagePath { get; set; }
        [ForeignKey("Post")]
        public int PostId { get; set; }
        public virtual Post? Post { get; set; }
    }
}
