using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SignYourYard.Data;
using SignYourYard.Data.Entities;
using SignYourYard.Features.DataTransferObjects;
using SignYourYard.Features.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignYourYard.Controllers
{
    [Route("/api/auth")]
    [ApiController]

    public class AuthorizationController : ControllerBase
    {
        private readonly DataContext dataContext;
        private readonly UserManager<User> userManager;
        private readonly RoleManager<Role> roleManager;
        private readonly SignInManager<User> signInManager;

        public AuthorizationController(DataContext dataContext, UserManager<User> userManager, RoleManager<Role> roleManager, SignInManager<User> signInManager)
        {
            this.dataContext = dataContext;
            this.userManager = userManager;
            this.roleManager = roleManager;
            this.signInManager = signInManager;
        }

        // Login authentication
        // High volume of space magic, make sure to google more of this
        [HttpPost("login")]
        [Authorize(Roles = Roles.Admin)]
        public async Task<ActionResult> LoginAsync(LoginDto dto)
        {
            var user = await userManager.FindByNameAsync(dto.username);
            if (user == null)
            {
                return BadRequest();
            }

            var result = await signInManager.CheckPasswordSignInAsync(user, dto.password, true);

            if (!result.Succeeded)
            {
                return BadRequest();
            }

            await signInManager.SignInAsync(user, false, "Password");

            var roles = await userManager.GetRolesAsync(user);

            return Ok(new UserRoleDto
            {
                Id = user.Id,
                Username = user.UserName,
                UserRoles = roles
            }); ;
        }

        [HttpPost("Create")]
        public async Task<ActionResult> Create(CreateUserDto dto)
        {
            var user = new User { UserName = dto.username };
            await userManager.CreateAsync(user, dto.password);
            await userManager.AddToRoleAsync(user, dto.role);
            return Ok();
        }
    }
}
