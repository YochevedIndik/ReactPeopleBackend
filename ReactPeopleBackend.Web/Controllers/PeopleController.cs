using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ReactPeopleBackend.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactPeopleBackend.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private string _connectionString;
        public PeopleController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [Route ("getall")]
        public List<Person> GetAll()
        {
            var repo = new PeopleRepository(_connectionString);
            return repo.GetAll();
        }
        [Route("addperson")]
        [HttpPost]
        public int AddPerson(Person person)
        {
            var repo = new PeopleRepository(_connectionString);
            repo.AddPerson(person);
            return person.Id;
        }
        [Route("delete")]
        [HttpPost]
        public void Delete(Person p)
        {
            var repo = new PeopleRepository(_connectionString);
            repo.Delete(p);
            
        }
        [Route("update")]
        [HttpPost]
        public void Update(Person p)
        {
            var repo = new PeopleRepository(_connectionString);
            repo.Update(p);
        }


    }
}
