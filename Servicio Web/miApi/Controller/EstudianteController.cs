using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Service;
using Model;

namespace api.Controllers
{
    [Route("[controller]")]
    public class EstudianteController : Controller
    {
        private readonly IEstudianteService _estudianteService;


        public EstudianteController(IEstudianteService estudianteService)
        {
            _estudianteService = estudianteService;
        }




        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(
                _estudianteService.ObtenerTodo()
            );
        }





        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(
                   _estudianteService.Get(id)
            );
        }




        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody] Estudiante model)
        {
            return Ok(
                   _estudianteService.Agregar(model)
            );
        }

        // PUT api/values/5
        [HttpPut]
        public IActionResult Put([FromBody] Estudiante model)
        {
            return Ok(
                   _estudianteService.Actualizar(model)
            );
        }






        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {

            return Ok(
               
                _estudianteService.Eliminar(id)
            );
        }
    }
}
