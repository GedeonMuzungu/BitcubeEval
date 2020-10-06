using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TrainningAppBack.Core.Entities;
using TrainningAppBack.Core.Interface;

namespace TrainningAppBack.infrasturcture
{
    public class StudentRepository : IStudentRepository
    {
        private readonly StoreContext _context;
        public StudentRepository(StoreContext context)
        {
            _context = context;

        }
        public async Task<IReadOnlyList<Student>> GetStudentAsync()
        {
            return await _context.Students
                    .Include(s => s.Degree)
                    .ToListAsync();
        }
    }
}