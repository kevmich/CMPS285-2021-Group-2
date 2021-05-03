using SignYourYard.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignYourYard.Features.Users
{
    public class UserDto
    {
        public int Id { get; set; }
        public string username { get; set; }
        public virtual ICollection<UserRole> Roles { get; set; }
    }
}
