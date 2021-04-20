using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SignYourYard.Data.Entities;
using SignYourYard.Data.Inventory;
using SignYourYard.Inventory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignYourYard.Data
{
    public class DataContext : IdentityDbContext<User, Role, int, IdentityUserClaim<int>, UserRole, IdentityUserLogin<int>, IdentityRoleClaim<int>, IdentityUserToken<int>>
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
        public DbSet<Sign> Sign{  get; set; }
        public DbSet<Order> Order { get; set; }
        public DbSet<SalesPackage> SalesPackages { get; set; }



        // Creates the relationships between a User and a Role
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            var userRoleBuilder = builder.Entity<UserRole>();

            userRoleBuilder.HasKey(x => new { x.UserId, x.RoleId });

            userRoleBuilder.HasOne( x => x.Role )
                .WithMany(x => x.Users)
                .HasForeignKey(x => x.RoleId);

            userRoleBuilder.HasOne(x => x.User )
                .WithMany(x => x.Roles)
                .HasForeignKey(x => x.UserId);
        }
    }
}
