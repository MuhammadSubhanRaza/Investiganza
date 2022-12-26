using System.ComponentModel.DataAnnotations.Schema;

namespace backendInvestiganza.Models
{
    [NotMapped]
    public class Signup
    {

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public bool isInvestor { get; set; }
    }
}
