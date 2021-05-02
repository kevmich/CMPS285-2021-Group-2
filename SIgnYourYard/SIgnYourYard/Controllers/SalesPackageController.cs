using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SignYourYard.Data;
using SignYourYard.Data.Entities;
using SignYourYard.Data.Inventory;
using SignYourYard.Features.Inventory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignYourYard.Controllers
{

    [Route("/api/salesPackage")]
    [ApiController]
    public class SalesPackageController : ControllerBase
    {
        private readonly DataContext dataContext;
        private readonly UserManager<User> userManaer;

        public SalesPackageController(DataContext dataContext, UserManager<User> userManager)
        {
            this.dataContext = dataContext;
        }

       // [Authorize(Roles = Roles.Admin)]
        [HttpPost("CreateSalesPackage")]
        public ActionResult<CreateSalesPackageDto> CreateSalesPackage(CreateSalesPackageDto targetValue)
        {
            using (var transaction = dataContext.Database.BeginTransaction())
            {
                var data = dataContext.Set<SalesPackage>().Add(new SalesPackage
                {
                    name = targetValue.name,
                    price = targetValue.price

                });
                dataContext.SaveChanges();
                transaction.Commit();
                return Created($"api/salesPackage/{data.Entity.Id}", targetValue);
            }
        }

        //[Authorize(Roles = Roles.Admin)]
        [HttpGet("GetSalesPackageInfo")]
        public ActionResult<GetSalesPackageDto> GetSalesPackageInfo()
        {
            using (var transaction = dataContext.Database.BeginTransaction())
            {
                int i = 1;
                AllSalesPackagesDto response = new AllSalesPackagesDto();
                var data = dataContext.Set<SalesPackage>().FirstOrDefault(x => x.Id == i);

                while ( data != null)
                {
                    i++;
                    data = dataContext.Set<SalesPackage>().FirstOrDefault(x => x.Id == i);
                }

                double[] allPrices = new double[i - 1];
                String[] allNames = new string[i - 1];

                i = 1;
                data = dataContext.Set<SalesPackage>().FirstOrDefault(x => x.Id == i);

                while( data != null)
                {
                    allPrices[i - 1] = data.price;
                    allNames[i - 1] = data.name;
                    i++;
                    data = dataContext.Set<SalesPackage>().FirstOrDefault(x => x.Id == i);
                }

                response.names = allNames;
                response.prices = allPrices;
                transaction.Commit();
                return Ok(response);
            }
        }

        //[Authorize(Roles = Roles.Admin)]
        [HttpPut("UpdateSalesPackage")]
        public ActionResult<GetSalesPackageDto> updateSalesPackage(int id, SalesPackageUpdateDto targetValue)
        {
            using (var transaction = dataContext.Database.BeginTransaction())
            {
                var data = dataContext.Set<SalesPackage>().FirstOrDefault(x => x.Id == id);

                if (data == null)
                {
                    return BadRequest();
                }
                data.price = targetValue.price;
                dataContext.SaveChanges();
                transaction.Commit();
                return Ok();
            }
        }
    }

}
