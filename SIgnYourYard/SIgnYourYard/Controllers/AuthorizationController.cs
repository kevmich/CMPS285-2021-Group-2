using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SignYourYard.Data;
using SignYourYard.Data.Entities;
using SignYourYard.Features.DataTransferObjects;
using SignYourYard.Features.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace SignYourYard.Controllers
{
    [Route("api/auth")]
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

        private static Expression<Func<User, UserDto>> mapper()
        {
            return x => new UserDto
            {
                username = x.UserName,
                Roles = x.Roles
            };
        }

        [HttpPost("login")]
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
            var user = new User
            {
                UserName = dto.username
            };

            using (var transaction = await dataContext.Database.BeginTransactionAsync())
            {
                if( string.Equals(dto.role, Roles.Customer, StringComparison.InvariantCultureIgnoreCase))
                {
                    return BadRequest();
                }

                if( !await dataContext.Roles.AnyAsync( x => x.Name == dto.role ))
                {
                    return BadRequest();
                }

                var identityResult = await userManager.CreateAsync(user, dto.password);
                if (!identityResult.Succeeded)
                {
                    return BadRequest();
                }

                var roleResult = await userManager.AddToRoleAsync(user, dto.role);
                if( !roleResult.Succeeded)
                {
                    return BadRequest();
                }

                transaction.Commit();

                return Created(string.Empty, new UserDto
                {
                    username = user.UserName
                });
            }
        }

        [HttpGet("Check")]
        public async Task<ActionResult<UserDto>> CheckUser()
        {

            var userName = User.Identity.Name;
            var temp = await dataContext.Set<User>().Where(x => x.UserName == userName).Select(mapper()).FirstOrDefaultAsync();
            if (temp == null)
            {
                return BadRequest();
            }

            UserDto response = new UserDto();
            response.username = temp.username;
            return Ok(response);
        }

        [HttpPost("Logout")]
        public async Task<ActionResult> logout()
        {
            await signInManager.SignOutAsync();

            return Ok();
        }
    }
}
