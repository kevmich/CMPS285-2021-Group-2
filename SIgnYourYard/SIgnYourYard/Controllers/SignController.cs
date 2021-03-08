using Microsoft.AspNetCore.Mvc;
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

        public static Expression<Func<Sign, SignDto>> MapEntityDto()
        {
            return x => new SignDto
            {
                Id = x.Id,
                price = x.price,
                emoji = x.emoji,
                color = x.color,
                content = x.content

            };
        }
    }
}
