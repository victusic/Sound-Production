using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using SpApi.Models;

namespace SpApi.Controllers
{
    public class VisitsController : ApiController
    {
        private MusicalBaseEntities db = new MusicalBaseEntities();

        // Выдача записи по id обьявления 
        [Route("api/getVisits")]
        public IHttpActionResult GetVisits(int advertisiment)
        {
            var visits = db.Visits.ToList().Where(p => p.Advertisiment == advertisiment).ToList();
            return Ok(visits);
        }

        // Добавление объявления
        [Route("api/VisitsPost")]
        [ResponseType(typeof(Visit))]
        public async Task<IHttpActionResult> PostVisit(Visit visit)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Visits.Add(visit);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = visit.VisitId }, visit);
        }

    }
}