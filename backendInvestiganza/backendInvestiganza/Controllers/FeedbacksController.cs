using backendInvestiganza.Data;
using backendInvestiganza.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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

        [HttpPost]
        public async Task<ActionResult<Feedback>> PostFeedback(Feedbacks feedback)
        {
            _context.Feedbacks.Add(feedback);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetFeedback", new { id = feedback.Id }, feedback);
            return Ok(new { message = "data saved" });
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Feedbacks>> GetFeedback(int id)
        {
            var feedback = await _context.Feedbacks.FindAsync(id);

            if (feedback == null)
            {
                return NotFound();
            }

            return feedback;
        }

    }
}
