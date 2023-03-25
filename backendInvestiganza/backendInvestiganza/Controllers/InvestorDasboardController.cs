using backendInvestiganza.Data;
using backendInvestiganza.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backendInvestiganza.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvestorDasboardController : ControllerBase
    {

        private readonly InvestiganzaDbContext _context;

        public InvestorDasboardController(InvestiganzaDbContext context)
        {
            _context = context;
        }

        [HttpGet("{userid}")]
        public async Task<ActionResult<InvestorDashboard>> GetDetails(string userid)
        {

            var details = await (
                from u in _context.Users
                join profile in _context.Profiles
                on u.Id equals profile.UserId
                join feedback in _context.UserFeedbacks
                on u.Id equals feedback.UserId
                join proposal in _context.Proposals
                on u.Id equals proposal.UserId
                select new InvestorDashboard()
                {
                    About = profile.About,
                    Name = u.FirstName + " " + u.LastName,
                    ProfileId = profile.Id,
                    TotalConnections = 10,
                    TotalFeedbacks = _context.UserFeedbacks.Count(x => x.UserId == userid),
                    TotalProposals = _context.Proposals.Count(x => x.UserId == userid),
                    Proposals = _context.Proposals.Where(x => x.UserId == userid).ToList(),
                    UserId = userid
                }
                ).Where(x => x.UserId == userid).FirstOrDefaultAsync();

            return details;

        }


    }
}
