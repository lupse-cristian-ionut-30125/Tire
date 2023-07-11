using System.ComponentModel.DataAnnotations;

namespace TyresWebApp.dto
{
    public class TyreDto
    {
        public int Id { get; set; }
        public string NumarInmatriculare { get; set; }
        public string URLNumarInmatriculare { get; set; }
        public int Kilometrii { get; set; }
        public string URLKilometrii { get; set; }
         
        public int ProfilInterior { get; set; }
        public string URLProfilInterior { get; set; }

        public int ProfilMijloc { get; set; }
        public string URLProfilMijloc { get; set; }

        public int ProfilExterior { get; set; }
        public string URLProfilExterior { get; set; }

    }
}
