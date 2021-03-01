using Microsoft.EntityFrameworkCore;
using SignYourYard.Inventory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignYourYard.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
        public DbSet<Sign> Sign{ get; set; }
        public DbSet<Order> Order { get; set; }
    }
}
