using System.Collections.Generic;
using System;

namespace TrainningAppBack.Core.Entities
{
    public class Course : BaseEntity
    {
        public string Name { get; set; }
        public DateTime? Starting { get; set; }
        public DateTime? Ending { get; set; }
        public List<Subject> Subjects { get; set; }
        public Degree Degree { get; set; }
        public int DegreeId { get; set; }
    }

}
