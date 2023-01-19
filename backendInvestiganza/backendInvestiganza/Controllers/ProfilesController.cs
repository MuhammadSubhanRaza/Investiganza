using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backendInvestiganza.Data;
using backendInvestiganza.Models;
using backendInvestiganza.CombineModels;

namespace backendInvestiganza.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfilesController : ControllerBase
    {
        private readonly InvestiganzaDbContext _context;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public ProfilesController(InvestiganzaDbContext context, IWebHostEnvironment webHostEnvironment)
        {
            _context = context;
            _webHostEnvironment = webHostEnvironment;
        }

        // GET: api/Profiles
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

        // GET: api/Profiles/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProfileUser>> GetProfile(int id)
        {
            var profile = await (from p in _context.Profiles
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
                             ).Where(x=>x.Id == id).FirstOrDefaultAsync();

            return profile;
        }

        // PUT: api/Profiles/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProfile(int id, Profile profile)
        {
            if (id != profile.Id)
            {
                return BadRequest();
            }

            _context.Entry(profile).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProfileExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Profiles
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<ActionResult<Profile>> PostProfile([FromForm]Profile profile)
        {
            profile.ProfileImagePath = await SaveImage(profile.ImageFile);
            _context.Profiles.Add(profile);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ProfileExists(profile.CategoryId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetProfile", new { id = profile.CategoryId }, profile);
        }

        // DELETE: api/Profiles/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProfile(int id)
        {
            var profile = await _context.Profiles.FindAsync(id);
            if (profile == null)
            {
                return NotFound();
            }

            _context.Profiles.Remove(profile);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProfileExists(int id)
        {
            return _context.Profiles.Any(e => e.CategoryId == id);
        }

        [NonAction]
        private async Task<string> SaveImage(IFormFile imageFile)
        {
            string imageName = new String(Path.GetFileNameWithoutExtension(imageFile.FileName).
                Take(10).ToArray()).Replace(' ','-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_webHostEnvironment.WebRootPath,"uploads",imageName);
            using (var fileStream = new FileStream(imagePath,FileMode.Create))
            { 
                await imageFile.CopyToAsync(fileStream);
            }
            return imageName;
        }
    }
}
