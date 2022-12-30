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

        public ProfilesController(InvestiganzaDbContext context)
        {
            _context = context;
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
                                ProfileImagePath = p.ProfileImagePath,
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

            

            //var l = _context.Profiles.ToList();
            return profiles;
        }

        // GET: api/Profiles/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Profile>> GetProfile(int id)
        {
            var profile = await _context.Profiles.FindAsync(id);

            if (profile == null)
            {
                return NotFound();
            }
            
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
        public async Task<ActionResult<Profile>> PostProfile(Profile profile)
        {
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
    }
}
