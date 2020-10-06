using System.Collections.Generic;
using System.Threading.Tasks;
using TrainningAppBack.Core.Entities;

namespace TrainningAppBack.Core.Interface
{
    public interface IGenericRepository<T> where T : BaseEntity
    {
        Task<IReadOnlyList<T>> ListAllAsync ();
        Task<T> GetByIdAsync (int id);
    }
}