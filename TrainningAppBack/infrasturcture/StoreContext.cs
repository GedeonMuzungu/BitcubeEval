using Microsoft.EntityFrameworkCore;
using TrainningAppBack.Core.Entities;

namespace TrainningAppBack.infrasturcture
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions<StoreContext> options) : base(options)
        { }

        // protected override void OnModelCreating(DbModelBuilder modelBuilder)
        // {

        // }
        public DbSet<Student> Students { get; set; }
        public DbSet<Degree> Degrees { get; set; }
        public DbSet<Lecturer> Lecturers { get; set; }
        public DbSet<Course> Courses { get; set; }
    }
}