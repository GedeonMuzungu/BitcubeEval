using System;

namespace TrainningAppBack.Core.Entities
{
    public class User : BaseEntity
    {
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string Surname { get; set; }
        public string EmailAddress { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string Forenames
        {
            get { return FirstName + " " + MiddleName; }
        }
        
    }
}