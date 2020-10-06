using System;

namespace TrainningAppBack.Core.Entities
{
    public class Student : User
    {
        public Degree Degree { get; set; }
        public int DegreeId { get; set; }
    }
}