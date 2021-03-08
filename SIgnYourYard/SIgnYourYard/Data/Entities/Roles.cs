using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignYourYard.Data.Entities
{
    // defines the roles that users can have
    public class Roles
    {
        public const String Admin = nameof(Admin);
        public const String Customer = nameof(Customer);
    }
}
