using TyresWebApp.Models;

namespace TyresWebApp.Interfaces
{
    public interface ITyreRepository
    {
        ICollection<TyreModels> GetTyres();

        bool TyreExists(int id);
        bool CreateTyre(TyreModels tyre);

        bool Save();
    }
}
