using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API;
using API.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TrainningAppBack.Core.Entities;
using TrainningAppBack.Core.Interface;

namespace TrainningAppBack.API.Controllers
{
    public class StudentController : BaseApiController
    {
        private readonly IGenericRepository<Student> _studentRepo;
        public StudentController (IGenericRepository<Student> studentRepo)
        {
            _studentRepo = studentRepo;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Student>>> GetStudents()
        {
            var stud = await _studentRepo.ListAllAsync();
            return Ok(stud);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> GetStudent(int id)
        {
            var stud = await _studentRepo.GetByIdAsync(id);
            return Ok(stud);
        }
    }
}