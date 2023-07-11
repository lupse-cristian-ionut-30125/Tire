using AutoMapper;
using TyresWebApp.dto;
using TyresWebApp.Models;

namespace TyresWebApp.Helper
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<TyreDto,TyreModels>();

        }
    }
}