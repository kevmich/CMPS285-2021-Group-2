using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignYourYard.Features.Inventory
{
    public class UpdateSignDto
    {
        public int stock { get; set; }
        public bool emoji { get; set; }
        public String color { get; set; }
        public String content { get; set; }
    }
}
