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
    public class SubjectController : BaseApiController
    {
        private readonly IGenericRepository<Subject> _subjectRepo;
        public SubjectController (IGenericRepository<Subject> subjectRepo)
        {
            _subjectRepo = subjectRepo;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Subject>>> GetSubjects()
        {
            var sub = await _subjectRepo.ListAllAsync();
            return Ok(sub);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Subject>> GetSubject(int id)
        {
            var sub = await _subjectRepo.GetByIdAsync(id);
            return Ok(sub);
        }
    }
}