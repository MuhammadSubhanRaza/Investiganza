using backendInvestiganza.CombineModels;
using backendInvestiganza.Data;
using backendInvestiganza.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backendInvestiganza.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MyProposalsController : ControllerBase
    {


        private readonly InvestiganzaDbContext _context;

        public MyProposalsController(InvestiganzaDbContext context)
        {
            _context = context;
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Proposal>>> GetUserPosts(string id)
        {
            var proposals = await _context.Proposals.Where(x => x.UserId == id).ToListAsync();
            return proposals;
        }

    }
}
