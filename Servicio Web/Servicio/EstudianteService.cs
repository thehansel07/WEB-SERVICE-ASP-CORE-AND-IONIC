using Microsoft.EntityFrameworkCore;
using Model;
using Persistence;
using System.Collections.Generic;
using System.Linq;

namespace Service
{
    public interface IEstudianteService
    {

        IEnumerable<Estudiante> ObtenerTodo();
        bool Agregar(Estudiante model);
        bool Eliminar(int matricula);
        bool Actualizar(Estudiante model);
        Estudiante Get(int id);
    }

    public class EstudianteService : IEstudianteService
    {
        private readonly EstudianteDbContext _EstudianteDbContext;

        public EstudianteService(
            EstudianteDbContext estudianteDbContext
        )
        {
            _EstudianteDbContext = estudianteDbContext;
        }

        public IEnumerable<Estudiante> ObtenerTodo()
        {
            var result = new List<Estudiante>();

            try
            {
                result = _EstudianteDbContext.Estudiante.ToList();
            }
            catch (System.Exception)
            {
                
            }

            return result;
        }


        public Estudiante Get(int matricula)
        {

            var result = new Estudiante();

            try
            {

                  result = _EstudianteDbContext.Estudiante.Single(x => x.Matricula == matricula);
            }

            catch (System.Exception)
            {


            }

            return result;
        }

        public bool Agregar(Estudiante model)
        {

            try
            {
                _EstudianteDbContext.Add(model);
                _EstudianteDbContext.SaveChanges();
            }
            catch (System.Exception)
            {
                return false;
            }

            return true;
        }

        public bool Actualizar(Estudiante model)
        {
            try
            {
                var originalModel = _EstudianteDbContext.Estudiante.Single(x =>
                    x.Matricula == model.Matricula
                );

                originalModel.Nombre = model.Nombre;
                originalModel.Apellido = model.Apellido;
                originalModel.Genero = model.Genero;

                _EstudianteDbContext.Update(originalModel);
                _EstudianteDbContext.SaveChanges();
            }
            catch (System.Exception)
            {

                return false;
            }


            return true;
        }

        public bool Eliminar(int matricula)
        {
            try
            {

                _EstudianteDbContext.Entry(new Estudiante { Matricula = matricula }).State = EntityState.Deleted; ;
                _EstudianteDbContext.SaveChanges();
           
            }

            catch (System.Exception)
            {
                return false;
            }


            return true;
        }
    }
}
