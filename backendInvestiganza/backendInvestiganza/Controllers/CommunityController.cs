using backendInvestiganza.CombineModels;
using backendInvestiganza.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backendInvestiganza.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommunityController : ControllerBase
    {

        private readonly InvestiganzaDbContext _context;

        public CommunityController(InvestiganzaDbContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProfileUser>>> GetProfiles()
        {


            var profiles = await (from p in _context.Profiles
                                  join u in _context.Users
                                  on p.UserId equals u.Id
                                  join c in _context.Categories
                                  on p.CategoryId equals c.Id
                                  join o in _context.Occupations
                                  on p.OccupationId equals o.Id
                                  join cy in _context.Cities
                                  on p.ResidenceCityId equals cy.Id
                                  select new ProfileUser()
                                  {
                                      Id = p.Id,
                                      ProfileImagePath = @"http://localhost:5070/uploads/" + p.ProfileImagePath,
                                      CNIC = p.CNIC,
                                      Address = p.Address,
                                      ProvinceResidence = p.ProvinceResidence,
                                      ResidenceCity = cy.Name,
                                      About = p.About,
                                      Degree = p.Degree,
                                      OtherQualification = p.OtherQualification,
                                      OccupationName = o.Name,
                                      OtherOccupation = p.OtherOccupation,
                                      CategoryName = c.Name,
                                      FirstName = u.FirstName,
                                      LastName = u.LastName,
                                      Email = u.Email
                                  }
                            ).ToListAsync();



            return profiles;
        }


    }
}
