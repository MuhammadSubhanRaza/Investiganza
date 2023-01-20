using Microsoft.AspNetCore.Identity;

namespace backendInvestiganza.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool isInvestor { get; set; }
        public int IsAdmin { get; set; } = 0;
        public bool IsUserLocked { get; set; } = false;

        public virtual Profile Profile { get; set; }
    }
}
