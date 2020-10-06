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
    public class LecturerController : BaseApiController
    {
        private readonly IGenericRepository<Lecturer> _lecturerRepo;
        public LecturerController(IGenericRepository<Lecturer> lecturerRepo)
        {
            _lecturerRepo = lecturerRepo;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Lecturer>>> GetLecturers()
        {
            var lect = await _lecturerRepo.ListAllAsync();
            return Ok(lect);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Lecturer>> GetLecturer(int id)
        {
            var lect = await _lecturerRepo.GetByIdAsync(id);
            return Ok(lect);
        }

    }
}