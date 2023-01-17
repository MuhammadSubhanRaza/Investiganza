using backendInvestiganza.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace backendInvestiganza.CombineModels
{
    [NotMapped]
    public class ProfilePost
    {
        public int PostId { get; set; }
        public string Subject { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }
        public float Amount { get; set; }
        public string Document { get; set; }
        public List<PostImage> Images { get; set; }
        public string UserName { get; set; }
        public string PofilePath { get; set; }
        public int CategoryId { get; set; }

    }
}
