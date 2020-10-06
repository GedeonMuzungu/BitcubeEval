using System;

namespace TrainningAppBack.Core.Entities
{
    public class Duration
    {
        public DateTime Starting { get; set; }
        public DateTime Ending { get; set; }
        public int NumberOfYears { get => (new DateTime(1, 1, 1) + (Ending - Starting)).Year - 1; }
        int NumberOfMonths { get => (((Ending.Year - Starting.Year) * 12) + Ending.Month - Starting.Month);}
    }
}