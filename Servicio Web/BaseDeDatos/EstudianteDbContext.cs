using Microsoft.EntityFrameworkCore;
using Model;

namespace Persistence
{
    public class EstudianteDbContext : DbContext
    {
        public DbSet<Estudiante> Estudiante { get; set; }

        public EstudianteDbContext(DbContextOptions<EstudianteDbContext> options)
            : base(options)
        { }
    }
}
