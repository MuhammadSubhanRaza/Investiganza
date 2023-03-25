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
    public class FeedbacksController : ControllerBase
    {

        private readonly InvestiganzaDbContext _context;

        public FeedbacksController(InvestiganzaDbContext context)
        {
            _context = context;
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<ProfileFeedbacks>>> GetAllFeedbacks(int id)
        {
            var allFeedbacks = await (from f in _context.UserFeedbacks
                                      join p in _context.Profiles
                                      on f.ProfileId equals p.Id
                                      join u in _context.Users
                                      on p.UserId equals u.Id
                                      select new ProfileFeedbacks()
                                      {
                                          ProfileId = p.Id,
                                          Date = f.Date,
                                          Message = f.Message,
                                          Name = u.FirstName+" "+u.LastName,
                                          ProfileImagePath = @"http://localhost:5070/uploads/" + p.ProfileImagePath
                                      }
                                      ).Where(x=>x.ProfileId == id).ToListAsync();
            return allFeedbacks;
        }


        [HttpPost]
        public async Task<ActionResult<UserFeedback>> PostFeedback(UserFeedback feedback)
        {
            _context.UserFeedbacks.Add(feedback);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetFeedback", new { id = feedback.Id }, feedback);
            return Ok(new { message = "data saved" });
        }




        //[HttpGet("{id}")]
        //public async Task<ActionResult<Feedbacks>> GetFeedback(int id)
        //{
        //    var feedback = await _context.Feedbacks.FindAsync(id);

        //    if (feedback == null)
        //    {
        //        return NotFound();
        //    }

        //    return feedback;
        //}

    }
}
