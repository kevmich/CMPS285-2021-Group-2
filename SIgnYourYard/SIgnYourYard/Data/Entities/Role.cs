using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignYourYard.Data.Entities
{
    // Defines the role class
    public class Role : IdentityRole<int>
    {
        public virtual ICollection<UserRole> Users { get; set; }

    }
}
