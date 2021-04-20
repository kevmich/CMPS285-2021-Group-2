using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using SignYourYard.Data;
using SignYourYard.Data.Entities;
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
        private readonly UserManager<User> userManager;

        public SignController( DataContext dataContext, UserManager<User> userManager)
        {
            this.dataContext = dataContext;
            this.userManager = userManager;
        }

        // Endpoint for adding a new sign to the database
        [HttpPost("CreateSign")]
        public ActionResult<CreateSignDto> AddSign( CreateSignDto targetValue )
        {
            using (var transaction = dataContext.Database.BeginTransaction())
            {
                string[] colorOptions = { "red", "green", "yellow", "blue", "black", "sparkly gold", "sparkly pink", "teal", "orange" };
                String checkedColor = "";
                for ( int i = 0; i< colorOptions.Length; i++)
                {
                    if (targetValue.color.ToLower().Equals(colorOptions[i]))
                    {
                        checkedColor = colorOptions[i];
                    }
                }
                var data = dataContext.Set<Sign>().Add(new Sign
                {
                    emoji = targetValue.emoji,
                    color = checkedColor,
                    content = targetValue.content,
                    stock = targetValue.stock
                });
                dataContext.SaveChanges();
                transaction.Commit();
                return Created($"api/sign/{data.Entity.Id}", targetValue);
            }
        }

        // Endpoint for editing a sign that already exists
        //[Authorize]
        [HttpPut("SignUpdate")]
        public ActionResult<UpdateSignDto> ChangeSign(int signId, UpdateSignDto targetValue)
        {
            using (var transaction = dataContext.Database.BeginTransaction())
            {
                var data = dataContext.Set<Sign>().FirstOrDefault(x => x.Id == signId);
                {
                    if (data == null)
                    {
                        return BadRequest("Sign does not exist");
                    }
                    data.emoji = targetValue.emoji;
                    data.color = targetValue.color;
                    data.content = targetValue.content;
                    data.stock = targetValue.stock;
                };
            dataContext.SaveChanges();
            transaction.Commit();
            return Ok();
            }
        }

        // Endpoint for getting sign info
        //[Authorize]
        [HttpGet("GetSignStock")]
        public ActionResult<SignStockDto> GetSignStock( int signId )
        {
            using (var transaction = dataContext.Database.BeginTransaction())
            {

                var data = dataContext.Set<Sign>().FirstOrDefault(x => x.Id == signId);
                {
                    if (data == null)
                    {
                        return BadRequest("Sign does not exist");
                    }
                    SignStockDto response = new SignStockDto();
                    response.stock = data.stock;
                    transaction.Commit();
                    return Ok(response);
                };

            }
        }

        [HttpPut("UpdateSignStock")]
        public ActionResult<SignStockDto> UpdateSignStockDto( int signId, SignStockDto targetValue)
        {
            using (var transaction = dataContext.Database.BeginTransaction())
            {
                var data = dataContext.Set<Sign>().FirstOrDefault(x => x.Id == signId);

                if( data == null)
                {
                    return BadRequest();
                };
                data.stock = targetValue.stock;
                dataContext.SaveChanges();
                transaction.Commit();
                return Ok();
            }
        }

        [HttpGet("GetAllStock")]
        public ActionResult<AllStockDto> SignStockDto()
        {
            using (var transaction = dataContext.Database.BeginTransaction())
            {
                int i = 1;
                AllStockDto response = new AllStockDto();
                var data = dataContext.Set<Sign>().FirstOrDefault(x => x.Id == i);

                while( data != null)
                {
                    i++;
                    data = dataContext.Set<Sign>().FirstOrDefault(x => x.Id == i);
                }

                int[] allStock = new int[i - 1];
                i = 1;
                data = dataContext.Set<Sign>().FirstOrDefault(x => x.Id == i);

                while ( data != null)
                {
                    allStock[i - 1] = data.stock;
                    i++;
                    data = dataContext.Set<Sign>().FirstOrDefault(x => x.Id == i);
                }

                response.stock = allStock;
                transaction.Commit();
                return Ok(response);
            }
        }
    }
}
