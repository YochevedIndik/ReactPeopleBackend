using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ReactPeopleBackend.Data
{
    public class PeopleRepository
    {
        private string _connectionString;
        public PeopleRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public List<Person> GetAll()
        {
            using var context = new PeopleContext(_connectionString);
            return context.People.ToList();
        }
        public void AddPerson(Person person)
        {
            using var context = new PeopleContext(_connectionString);
            context.People.Add(person);
            context.SaveChanges();
        }
        public void Delete(Person p)
        {
            using var context = new PeopleContext(_connectionString);
            context.Database.ExecuteSqlInterpolated($"DELETE FROM People WHERE Id = {p.Id}");
            context.SaveChanges();
        }
        public void Update(Person person)
        {
            using var context = new PeopleContext(_connectionString);
            context.Database.ExecuteSqlInterpolated($"UPDATE People SET FirstName={person.FirstName}, LastName={person.LastName}, Age={person.Age} WHERE Id ={person.Id}");
            context.SaveChanges();
           
        }

        
    }
}
