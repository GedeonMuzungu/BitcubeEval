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
    public class DegreeController : BaseApiController
    {
        private readonly IGenericRepository<Degree> _degreeRepo;
        public DegreeController (IGenericRepository<Degree> degreeRepo)
        {
            _degreeRepo = degreeRepo;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Degree>>> GetDegrees()
        {
            var deg = await _degreeRepo.ListAllAsync();
            return Ok(deg);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Degree>> GetDegree(int id)
        {
            var deg = await _degreeRepo.GetByIdAsync(id);
            return Ok(deg);
        }
    }

        
}