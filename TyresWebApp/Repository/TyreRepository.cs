using TyresWebApp.Data;
using TyresWebApp.Interfaces;
using TyresWebApp.Models;

namespace TyresWebApp.Repository
{
    public class TyreRepository : ITyreRepository
    {
        private readonly DataContext _context;

        public TyreRepository(DataContext context)
        {
            _context = context;
        }
        public ICollection<TyreModels> GetTyres()
        {
            return _context.TyreCondition.OrderBy(p => p.Id).ToList();
        }
        public bool TyreExists(int id)
        {
            return _context.TyreCondition.Any(c => c.Id == id);
        }

        public bool CreateTyre( TyreModels tyre)
        {
            _context.Add(tyre);
            return Save();
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }

 
    }
}