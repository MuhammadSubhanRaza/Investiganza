using backendInvestiganza.Data;
using backendInvestiganza.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backendInvestiganza.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FSDashboardController : ControllerBase
    {


        private readonly InvestiganzaDbContext _context;

        public FSDashboardController(InvestiganzaDbContext context)
        {
            _context = context;
        }


        [HttpGet("{userid}")]
        public async Task<ActionResult<FSDashboard>> GetDetails(string userid)
        {

            var details = await (
                from u in _context.Users
                where u.Id == userid
                join profile in _context.Profiles
                on userid equals profile.UserId
                join feedback in _context.UserFeedbacks
                on u.Id equals feedback.UserId
                join proposal in _context.Proposals
                on u.Id equals proposal.UserId
                select new FSDashboard()
                {
                    About = profile.About,
                    Name = u.FirstName + " " + u.LastName,
                    ProfileId = profile.Id,
                    TotalConnections = 10,
                    TotalFeedbacks = _context.UserFeedbacks.Count(x => x.ProfileId == profile.Id),
                    TotalPosts = _context.Posts.Count(x => x.UserId == userid),
                    Posts = _context.Posts.Where(x => x.UserId == userid).ToList(),
                    UserId = userid
                }
                ).Where(x => x.UserId == userid).FirstOrDefaultAsync();

            return details;

        }

    }
}
