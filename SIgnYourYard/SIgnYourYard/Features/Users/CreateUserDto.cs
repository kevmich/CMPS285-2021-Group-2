using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignYourYard.Features.DataTransferObjects
{
    public class CreateUserDto
    {
        public String username { get; set; }
        public String password { get; set; }
        public String role { get; set; }
    }
}
