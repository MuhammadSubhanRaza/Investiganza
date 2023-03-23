using backendInvestiganza.CombineModels;
using backendInvestiganza.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backendInvestiganza.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MyPostsController : ControllerBase
    {


        private readonly InvestiganzaDbContext _context;

        public MyPostsController(InvestiganzaDbContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<ProfilePost>>> GetUserPosts(string id)
        {
            var post = await (from p in _context.Posts
                              join pi in _context.PostImages
                              on p.Id equals pi.PostId
                              join user in _context.Users
                              on p.UserId equals user.Id
                              join profile in _context.Profiles
                              on user.Id equals profile.UserId
                              select new ProfilePost()
                              {
                                  Amount = p.Amount,
                                  Subject = p.Subject,
                                  Description = p.Description,
                                  Document = p.DocumentPath,
                                  PostId = p.Id,
                                  Date = p.Date,
                                  CategoryId = p.CategoryId,
                                  UserName = user.FirstName + " " + user.LastName,
                                  PofilePath = @"http://localhost:5070/uploads/" + profile.ProfileImagePath,
                                  Images = _context.PostImages.Where(x => x.PostId == p.Id).ToList(),
                                  UserId = p.UserId
                              }
                              ).Where(x => x.UserId == id).ToListAsync();




            return post;
        }
    }
}
