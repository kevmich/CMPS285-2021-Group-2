using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignYourYard.Features.Inventory
{
    public class OrderInfoDto
    {
        public DateTimeOffset purchaseTime { get; set; }
        public String email { get; set; }
        public String address { get; set; }
    }
}
