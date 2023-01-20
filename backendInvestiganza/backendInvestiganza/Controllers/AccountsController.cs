using backendInvestiganza.Data;
using backendInvestiganza.Models;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using backendInvestiganza.CombineModels;

namespace backendInvestiganza.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private readonly InvestiganzaDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IHttpContextAccessor _contextAccessor;
        public IConfiguration _configuration;

        public AccountsController(InvestiganzaDbContext context,
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            IHttpContextAccessor contextAccessor,
            IConfiguration configuration
            )
        {
            _context = context;
            _userManager = userManager;
            _signInManager = signInManager;
            _contextAccessor = contextAccessor;
            _configuration = configuration;
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> SignupUser(Signup signupModel)
        {
            var user = new ApplicationUser()
            {
                FirstName = signupModel.FirstName,
                LastName = signupModel.LastName,
                Email = signupModel.Email,
                UserName = signupModel.Email,
                isInvestor = signupModel.isInvestor
            };

            var result = await _userManager.CreateAsync(user, signupModel.Password);

            if (result.Succeeded)
            {
                return Ok(new { message = "success", user = user });
            }

            return Ok(new { message = "failure", errors = result.Errors});

        }

        //[HttpPost]
        //[Route("login")]
        //public async Task<IActionResult> LoginUser(Login loginModel)
        //{
        //    var result = await _signInManager.PasswordSignInAsync(loginModel.Email, loginModel.Password, false, false);

        //    if (result.Succeeded)
        //    {
        //        //var user = _contextAccessor.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier);
        //        //var user = User.FindFirst("UserFirstName").Value;

        //        //var user =  _userManager.GetUserId(HttpContext.User); 

        //        //var user = HttpContext.User;



        //        return Ok(new { message = "success" });
        //    }

        //    return Ok(new { message = "failure", error = "Invalid Credentials" });
        //}


        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> LoginUser(Login loginModel)
        {
            var user = await _userManager.FindByEmailAsync(loginModel.Email);
            if(user==null)
            {
                return Ok(new { message = "failure", errors = "User is UnAutherized" });
            }

            var result = await _userManager.CheckPasswordAsync(user,loginModel.Password);

            if (!result)
            {
                return Ok(new { message = "failure", errors = "Invalid Credentials" });
            }

            var claims = new[] {
                new Claim("Email",loginModel.Email),
                new Claim(ClaimTypes.NameIdentifier,user.Id)
            };

            // ----------- CREATING THE JWT TOKEN

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["AuthSettings:Key"]));

            var token = new JwtSecurityToken(
                issuer: _configuration["AuthSettings:Issuer"],
                audience : _configuration["AuthSettings:Audience"],
                claims: claims,
                expires:DateTime.Now.AddDays(10),
                signingCredentials: new SigningCredentials(key,SecurityAlgorithms.HmacSha256)
                );

            string tokenAsString = new JwtSecurityTokenHandler().WriteToken(token);

            var profile_user = _context.Profiles.Where(x => x.UserId == user.Id).FirstOrDefault();

            string cnic = null;

            if (profile_user != null)
            {
                cnic = profile_user.CNIC;
            }

            var user_with_profile = new AfterLoginUserDetails() { 
                UserId = user.Id,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
                CNIC = cnic,
                ImageUrl = @"http://localhost:5070/uploads/" + profile_user.ProfileImagePath,
                isAdmin = user.IsAdmin,
                isInvestor = user.isInvestor,
                isProfileApproved = profile_user.IsProfileApproved,
                isUserLocked = user.IsUserLocked
            };


            return Ok(new { message = "success", token = tokenAsString, user = user_with_profile});
        }

    }
}
