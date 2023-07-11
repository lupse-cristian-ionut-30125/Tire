using Microsoft.EntityFrameworkCore;
using TyresWebApp.Models;

namespace TyresWebApp.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        public DbSet<TyreModels> TyreCondition { get; set; }
    }
} 