using PetHands.Domain.Entities;
using PetHands.Infrastructure.Base;
using PetHands.Infrastructure.Context;
using PetHands.Infrastructure.Interfaces;
using System.Linq;

namespace PetHands.Infrastructure.Repositories
{
    public class ConfiguracaoRepository : BaseRepository<Configuracao>, IConfiguracaoRepository
    {
        public ConfiguracaoRepository(PetHandsDbContext context) : base(context) { }

        public Configuracao GetByName(string nome)
        {
            return _dbSet.FirstOrDefault(c => c.Nome == nome);
        }
    }
}
