using backendInvestiganza.Data;
using backendInvestiganza.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace backendInvestiganza.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private readonly InvestiganzaDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;

        public AccountsController(InvestiganzaDbContext context,
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager)
        {
            _context = context;
            _userManager = userManager;
            _signInManager = signInManager;
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
                return Ok(new { message = "success" });
            }

            return Ok(new { message = "failure", errors = result.Errors });

        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> LoginUser(Login loginModel)
        {
            var result = await _signInManager.PasswordSignInAsync(loginModel.Email, loginModel.Password, false, false);

            if (result.Succeeded)
            {
                return Ok(new { message = "success"});
            }

            return Ok(new { message = "failure",error="Invalid Credentials" });
        }
    }
}
