using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignYourYard.Inventory
{
    public class Order
    {
        public int Id { get; set; }
        public DateTimeOffset purchaseTime { get; set; }
        public String email { get; set; }
        public String address { get; set; }
        public int totalPrice { get; set; }
        public String signs { get; set; }
    }
}
