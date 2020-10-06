using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TrainningAppBack.Core.Entities;
using TrainningAppBack.Core.Interface;

namespace TrainningAppBack.infrasturcture
{
    public class CourseRepository : ICourseRepository
    {
        private readonly StoreContext _context;
        public CourseRepository(StoreContext context)
        {
            _context = context;
        }
        public async Task<IReadOnlyList<Course>> GetCourseAsync()
        {
            return await _context.Courses
                    .Include(c => c.Degree)
                    .Include(c => c.Subjects)
                    .ToListAsync();
        }
    }
}