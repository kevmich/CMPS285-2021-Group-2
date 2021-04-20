using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignYourYard.Data.Inventory
{
    public class CreateSalesPackageDto
    {
        int Id { get; set; }
        public String name { get; set; }
        public double price { get; set; }
    }
}
