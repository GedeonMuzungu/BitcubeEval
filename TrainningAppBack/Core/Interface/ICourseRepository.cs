using System.Collections.Generic;
using System.Threading.Tasks;
using TrainningAppBack.Core.Entities;

namespace TrainningAppBack.Core.Interface
{
    public interface ICourseRepository
    {
         Task<IReadOnlyList<Course>> GetCourseAsync();
    }
}