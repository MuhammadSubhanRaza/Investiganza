using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backendInvestiganza.Data;
using backendInvestiganza.Models;

namespace backendInvestiganza.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OccupationsController : ControllerBase
    {
        private readonly InvestiganzaDbContext _context;

        public OccupationsController(InvestiganzaDbContext context)
        {
            _context = context;
        }

        // GET: api/Occupations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Occupation>>> GetOccupations()
        {
            return await _context.Occupations.ToListAsync();
        }

        // GET: api/Occupations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Occupation>> GetOccupation(int id)
        {
            var occupation = await _context.Occupations.FindAsync(id);

            if (occupation == null)
            {
                return NotFound();
            }

            return occupation;
        }

        // PUT: api/Occupations/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOccupation(int id, Occupation occupation)
        {
            if (id != occupation.Id)
            {
                return BadRequest();
            }

            _context.Entry(occupation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OccupationExists(id))
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

        // POST: api/Occupations
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Occupation>> PostOccupation(Occupation occupation)
        {
            _context.Occupations.Add(occupation);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOccupation", new { id = occupation.Id }, occupation);
        }

        // DELETE: api/Occupations/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOccupation(int id)
        {
            var occupation = await _context.Occupations.FindAsync(id);
            if (occupation == null)
            {
                return NotFound();
            }

            _context.Occupations.Remove(occupation);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OccupationExists(int id)
        {
            return _context.Occupations.Any(e => e.Id == id);
        }
    }
}
