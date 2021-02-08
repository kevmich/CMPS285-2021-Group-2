using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignYourYard.Inventory
{
    public class Sign : Merchandise
    {
        public int ID { get; set; }
        public bool emoji { get; set; }
        public int price { get; set; }
        public String color { get; set; }
        public String content { get; set; }
    }
}
