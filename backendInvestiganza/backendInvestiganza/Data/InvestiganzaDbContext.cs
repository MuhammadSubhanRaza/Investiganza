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


        protected override void OnModelCreating(ModelBuilder builder)
        {

            //builder.Entity<Profile>().HasKey(x => new { 
            //    x.CategoryId,
            //    x.OccupationId,
            //    x.UserId,
            //    x.ResidenceCityId,
            //    x.OccupationCityId
            //});

            //var profile_category = builder.Entity<Profile>();
            //profile_category.HasKey(p=>p.Id);
            //profile_category.HasOne(c => c.Category)
            //    .WithOne()


            base.OnModelCreating(builder);
        }


        public DbSet<Category> Categories { get; set; }
        public DbSet<City> Cities { get; set; }
        public DbSet<Occupation> Occupations { get; set; }
        public DbSet<Profile> Profiles { get; set; }
        public DbSet<ApplicationUser> Users { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<PostImage> PostImages { get; set; }
    }
}
