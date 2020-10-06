using System;
using System.Collections.Generic;

namespace TrainningAppBack.Core.Entities
{
    public class Degree : BaseEntity
    {
        public string Name { get; set; }
        public DateTime? Starting { get; set; }
        public DateTime? Ending { get; set; }
        public List<Course> Courses { get; set; }
        public Lecturer Lecturer { get; set; }
        public int LecturerId { get; set; }
    }

}