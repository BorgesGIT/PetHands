using PetHands.Domain.Entities;

namespace PetHands.Infrastructure.Interfaces
{
    public interface IConfiguracaoRepository
    {
        Configuracao GetByName(string nome);
    }
}
