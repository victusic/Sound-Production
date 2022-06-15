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
    public class AdvertisementsController : ApiController
    {
        private MusicalBaseEntities db = new MusicalBaseEntities();
        //Выбор по владельцу обьявления
        [Route("api/Advertisements")]
        public IHttpActionResult GetAdvertisements(int RepresentativeId)
        {
            var advertisements = db.Advertisements.Where(p => p.Representative == RepresentativeId).ToList();
            List<int?> meow = (from p in advertisements
                               select p.Group).ToList();
            return Ok(meow);
        }

        //Выбор по владельцу обьявления
        [Route("api/AdvertisementsA")]
        public IHttpActionResult GetAdvertisementsA(int RepresentativeId)
        {
            var advertisements = db.Advertisements.Where(p => p.Representative == RepresentativeId).ToList();
            List<int?> meow = (from p in advertisements
                               select p.Area).ToList();
            return Ok(meow);
        }

        //Вывод объявлений для менеджера
        [Route("api/AdvertisementsGroupFull")]
        public IHttpActionResult GetAdvertisementGroupFull()
        {
            var advertisements = db.Advertisements.Where(p => p.Moderation == 1 && p.TypeAdvertisement == 2).ToList();
            List<int?> meow = (from p in advertisements
                               select p.Group).ToList();
            return Ok(meow);
        }

        //Вывод объявлений для продюссера
        [Route("api/AdvertisementsAreaFull")]
        public IHttpActionResult GetAdvertisementAreaFull()
        {
            var advertisements = db.Advertisements.Where(p => p.Moderation == 1 && p.TypeAdvertisement == 1).ToList();
            List<int?> meow = (from p in advertisements
                               select p.Area).ToList();
            return Ok(meow);
        }

        //Базовый выбор объявления по id
        [ResponseType(typeof(Advertisement))]
        public async Task<IHttpActionResult> GetAdvertisement(int id)
        {
            Advertisement advertisement = await db.Advertisements.FindAsync(id);
            if (advertisement == null)
            {
                return NotFound();
            }

            return Ok(advertisement);
        }

        //Выбор объявления по группе
        [Route("api/GetAdvertisements")]
        public IHttpActionResult GetAdvertisements2(int Group)
        {
            var advertisements = db.Advertisements.ToList().Where(p => p.Group == Group).ToList();
            return Ok(advertisements);
        }

        //Выбор объявления по площадке
        [Route("api/GetAdvertisements")]
        public IHttpActionResult GetAdvertisements3(int Area)
        {
            var advertisements = db.Advertisements.ToList().Where(p => p.Area == Area).ToList();
            return Ok(advertisements);
        }

        // Добавление объявления
        [Route("api/AdvertisementsPost")]
        [ResponseType(typeof(Advertisement))]
        public IHttpActionResult PostAdvertisement(Advertisement advertisement)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Advertisements.Add(advertisement);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = advertisement.AdvertisementId }, advertisement);
        }

        // Удаление объявления
        [Route("api/AdvertisementsDel")]
        [ResponseType(typeof(Advertisement))]
        public IHttpActionResult DeleteAdvertisement(int Group)
        {
            Advertisement advertisement = db.Advertisements.Where(p => p.Group == Group).ToList().First();
            if (advertisement == null)
            {
                return NotFound();
            }

            db.Advertisements.Remove(advertisement);
            db.SaveChanges();

            return Ok(advertisement);
        }

        // Удаление объявления
        [Route("api/AdvertisementsDel2")]
        [ResponseType(typeof(Advertisement))]
        public IHttpActionResult DeleteAdvertisement2(int Area)
        {
            Advertisement advertisement = db.Advertisements.Where(p => p.Area == Area).ToList().First();
            if (advertisement == null)
            {
                return NotFound();
            }

            db.Advertisements.Remove(advertisement);
            db.SaveChanges();

            return Ok(advertisement);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AdvertisementExists(int id)
        {
            return db.Advertisements.Count(e => e.AdvertisementId == id) > 0;
        }
    }
}