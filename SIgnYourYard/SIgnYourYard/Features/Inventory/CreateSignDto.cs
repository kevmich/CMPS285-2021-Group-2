using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignYourYard.Features.Inventory
{
    public class CreateSignDto
    {
        public int stock { get; set; }
        public bool emoji { get; set; }
        public string color { get; set; }
        public string content { get; set; }
    }
}
