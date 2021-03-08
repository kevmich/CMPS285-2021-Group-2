using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignYourYard.Data.Entities
{
    // Defines a user as being able to have roles
    public class User: IdentityUser<int>
    {
        public virtual ICollection<UserRole> Roles { get; set; }
    }
}
