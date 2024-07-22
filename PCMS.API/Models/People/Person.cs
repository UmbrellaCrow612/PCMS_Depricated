﻿namespace PCMS.API.Models.People
{
    internal class Person
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public required string FirstName { get; set; }

        public string? MiddleName { get; set; }

        public required string LastName { get; set; }

        public required DateTime DateOfBirth { get; set; }

        public string? Email { get; set; }

        public required string PhoneNumber { get; set; }

        public string? ProfileImgUrl { get; set; }

        public required string Address { get; set; }

        public required string Gender { get; set; }

        public required string BirthPlace { get; set; }

        public required double Height { get; set; }

        public required string Race { get; set; }

        public required string Ethnicity { get; set; }

        public required string Nationality { get; set; }

        public string? PhysicalDescription { get; set; }

        public string? GeneralDescription { get; set; }

        public string? DriversLicenseNumber { get; set; }

        public string? NationalInsuranceNumber { get; set; }

    }
}
