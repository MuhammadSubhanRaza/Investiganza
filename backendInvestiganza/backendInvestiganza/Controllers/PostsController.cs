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
    public class PostsController : ControllerBase
    {

        private readonly InvestiganzaDbContext _context;
        private readonly IWebHostEnvironment _webHostEnvironment;


        public PostsController(InvestiganzaDbContext context, IWebHostEnvironment webHostEnvironment)
        {
            _context = context;
            _webHostEnvironment = webHostEnvironment;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProfilePost>>> GetPosts()
        {

            var post = await (from p in _context.Posts
                              join pi in _context.PostImages
                              on p.Id equals pi.PostId
                              join user in _context.Users
                              on p.UserId equals user.Id
                              join profile in _context.Profiles
                              on user.Id equals profile.UserId
                              select new ProfilePost() { 
                                Amount = p.Amount,
                                Subject = p.Subject,
                                Description = p.Description,
                                Document = p.DocumentPath,
                                PostId = p.Id,
                                Date = p.Date,
                                CategoryId = p.CategoryId,
                                UserName = user.FirstName+" "+user.LastName,
                                PofilePath = @"http://localhost:5070/uploads/"+profile.ProfileImagePath,
                                Images = _context.PostImages.Where(x=>x.PostId == p.Id).ToList()
                              }
                              ).OrderByDescending(x=>x.PostId).ToListAsync();

            return post;
        }


        [HttpGet("{id}")]
        [Route("getuserposts")]
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



        [HttpGet("{id}")]
        public async Task<ActionResult<ProfilePost>> GetPost(int id)
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
                                  Images = _context.PostImages.Where(x => x.PostId == p.Id).ToList()
                              }
                              ).Where(x=>x.PostId==id).FirstOrDefaultAsync();

            return post;
        }


        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<ActionResult<City>> PosPost([FromForm]Post post)
        {
            post.DocumentPath = await SaveFile(post.Document);
            
            _context.Posts.Add(post);
            await _context.SaveChangesAsync();

            foreach (var file in post.Images)
            {
                var PostImages = new PostImage();
                PostImages.ImagePath = await SaveFile(file);
                PostImages.PostId = post.Id;
                _context.PostImages.Add(PostImages);
                _context.SaveChangesAsync();
            }

            return CreatedAtAction("GetPost", new { id = post.Id }, post);
        }

        [NonAction]
        private async Task<string> SaveFile(IFormFile imageFile)
        {
            string imageName = new String(Path.GetFileNameWithoutExtension(imageFile.FileName).
                Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_webHostEnvironment.WebRootPath, "uploads", imageName);
            await imageFile.CopyToAsync(new FileStream(imagePath,FileMode.Create));
            return imageName;
        }

        //[HttpGet("{id}")]
        //public async Task<ActionResult<Post>> GetPost(int id)
        //{
        //    var post = await _context.Posts.FindAsync(id);

        //    if (post == null)
        //    {
        //        return NotFound();
        //    }

        //    return post;
        //}

    }
}
