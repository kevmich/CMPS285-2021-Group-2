﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignYourYard.Features.Inventory
{
    public class UpdateOrderDto
    {
       // public DateTimeOffset purchaseTime { get; set; }
        public String email { get; set; }
        public String address { get; set; }
        public String signs { get; set; }
        public int Id { get; internal set; }
        
    }
}
