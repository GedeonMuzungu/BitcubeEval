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
    public class CourseController : BaseApiController
    {
        private readonly IGenericRepository<Course> _courseRepo;
        private readonly ICourseRepository _courseRp;
        public CourseController(IGenericRepository<Course> courseRepo, ICourseRepository courseRp)
        {
            _courseRp = courseRp;
            _courseRepo = courseRepo;
        }

        public async Task<ActionResult<IReadOnlyList<Course>>> GetCourses()
        {
            var cours = await _courseRp.GetCourseAsync();
            return Ok(cours);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Course>> GetCourse(int id)
        {
            var cours = await _courseRepo.GetByIdAsync(id);
            return Ok(cours);
        }
    }
}