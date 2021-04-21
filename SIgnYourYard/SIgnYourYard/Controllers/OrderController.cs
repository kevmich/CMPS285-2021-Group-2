using Microsoft.AspNetCore.Mvc;
using SignYourYard.Data;
using SignYourYard.Features.Inventory;
using SignYourYard.Inventory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignYourYard.Controllers
{
    public class OrderController : Controller
    {
        private readonly DataContext dataContext;

        public OrderController( DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        // Endpoint for adding a new order to the database
        [HttpPost("CreateOrder")]

        public ActionResult<CreateOrderDto> AddOrder(CreateOrderDto targerValue)
        {
            var data = dataContext.Set<Order>().Add(new Order
            {
                Id = targerValue.Id,
               // purchaseTime = targerValue.purchaseTime,
                email = targerValue.email,
                address = targerValue.address,
                signs = targerValue.signs
            });
            dataContext.SaveChanges();
            return Created($"api/sign/{data.Entity.Id}", targerValue);
        }

        // Endpoint for updating an order to the database
        [HttpPut("OrderUpdate")]

        public ActionResult<UpdateOrderDto> ChangeOrder(int signId, UpdateOrderDto targetValue)
        {
            var data = dataContext.Set<Order>().FirstOrDefault(x => x.Id == signId);
            {
                if (data == null)
                {
                    return BadRequest();
                }
                data.Id = targetValue.Id;
               // data.purchaseTime = targetValue.purchaseTime;
                data.email = targetValue.email;
                data.address = targetValue.address;
                data.signs = targetValue.signs;
            };
            dataContext.SaveChanges();
            return Ok();
        }

        [HttpGet("OrderInfo")]

        public ActionResult<OrderInfoDto> OrderInfo(int signId)
        {
            using (var transaction = dataContext.Database.BeginTransaction())
            {
                var data = dataContext.Set<Order>().FirstOrDefault(x => x.Id == signId);
                {
                    if (data == null)
                    {
                        return BadRequest("No info found");
                    }
                    OrderInfoDto response = new OrderInfoDto();
                   // response.purchaseTime = data.purchaseTime;
                    response.email = data.email;
                    response.address = data.address;
                    transaction.Commit();
                    return Ok(response);
                };
            }
        }

        [HttpDelete("{Id:int}")]

        public async Task<ActionResult<CancelOrderDto>> CancelOrder(int Id)
        {
            try
            {
                var data = dataContext.GetOrder(Id);

                if(data == null)
                {
                    return BadRequest();
                }

                return await dataContext.CancelOrder(Id);
            }
            catch (Exception)
            {
                return StatusCodeResult();
            }
        }

        private ActionResult<CancelOrderDto> StatusCodeResult()
        {
            throw new NotImplementedException();
        }
    }
}
