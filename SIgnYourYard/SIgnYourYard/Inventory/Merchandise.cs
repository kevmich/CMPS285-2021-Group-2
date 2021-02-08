using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignYourYard.Inventory
{
    public class Merchandise 
    {
        public int Id { get; set; }
        public int price { get; set; }
        public DateTimeOffset delivereyTime { get; set; }
        public String history { get; set; }

    }
}
