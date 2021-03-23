using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using SignYourYard.Data;
using SignYourYard.Features.Inventory;
using SignYourYard.Inventory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace SignYourYard.Controllers
{
    [Route("/api/sign")]
    [ApiController]
    public class SignController : ControllerBase
    {
        private readonly DataContext dataContext;

        public SignController( DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        // Endpoint for adding a new sign to the database
        [HttpPost("CreateSign")]
        //[Authorize(Roles = Roles.Admin)]
        public ActionResult<CreateSignDto> AddSign( CreateSignDto targetValue )
        {
            var data = dataContext.Set<Sign>().Add(new Sign
            {
                emoji = targetValue.emoji,
                color = targetValue.color,
                content = targetValue.content,
                stock = targetValue.stock
            });
            dataContext.SaveChanges();
            return Created($"api/sign/{data.Entity.Id}", targetValue);
        }

        // Endpoint for editing a sign that already exists
        [HttpPut("SignUpdate")]
        public ActionResult<UpdateSignDto> ChangeSign(int signId, UpdateSignDto targetValue)
        {
            var data = dataContext.Set<Sign>().FirstOrDefault(x => x.Id == signId);
            {
                if (data == null)
                {
                    return BadRequest();
                }
                data.emoji = targetValue.emoji;
                data.color = targetValue.color;
                data.content = targetValue.content;
                data.stock = targetValue.stock;
            };
            dataContext.SaveChanges();
            return Ok();
        }
    }
}
