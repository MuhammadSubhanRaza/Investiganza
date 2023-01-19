using backendInvestiganza.Data;
using backendInvestiganza.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backendInvestiganza.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProposalsController : ControllerBase
    {

        private readonly InvestiganzaDbContext _context;

        public ProposalsController(InvestiganzaDbContext context)
        {
            _context = context;
        }

        // GET: api/Categories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Proposal>>> GetCategories()
        {
            return await _context.Proposals.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Proposal>> PostCategory(Proposal proposal)
        {
            _context.Proposals.Add(proposal);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPrposal", new { id = proposal.Id }, proposal);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Proposal>> GetPrposal(int id)
        {
            var proposal = await _context.Proposals.FindAsync(id);

            if (proposal == null)
            {
                return NotFound();
            }

            return proposal;
        }

    }
}
