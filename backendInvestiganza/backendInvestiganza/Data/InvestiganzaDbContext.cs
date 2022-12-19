using backendInvestiganza.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace backendInvestiganza.Data
{
    public class InvestiganzaDbContext : IdentityDbContext<ApplicationUser>
    {

        public InvestiganzaDbContext(DbContextOptions<InvestiganzaDbContext> dbContextOptions)
            :base(dbContextOptions)
        {
            
        }

        public DbSet<Category> Categories { get; set; }
    }
}
