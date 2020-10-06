using System.Collections.Generic;

namespace TrainningAppBack.Core.Entities
{
    public class Lecturer : User
    {
        public List<Degree> Degrees { get; set; }
    }
}