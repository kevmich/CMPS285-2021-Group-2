using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignYourYard.Features.Inventory
{
    public class AllSalesPackagesDto
    {
        public int Id { get; set; }
        public double[] prices { get; set; }
        public String[] names { get; set; }
    }
}
