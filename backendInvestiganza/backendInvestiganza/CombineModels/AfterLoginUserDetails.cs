using System.ComponentModel.DataAnnotations.Schema;

namespace backendInvestiganza.CombineModels
{
    [NotMapped]
    public class AfterLoginUserDetails
    {
        public string? UserId { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public string? CNIC { get; set; }
        public string? ImageUrl { get; set; }
        public int isAdmin { get; set; }
        public bool isInvestor { get; set; }
        public bool isUserLocked { get; set; }
        public bool isProfileApproved { get; set; }
    }
}
