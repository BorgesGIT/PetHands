namespace PetHands.AppService.Interfaces
{
    public interface IConfiguracaoAppService
    {
        string GetConfiguracao(string nome);
        string GetMenu(string dominio);
    }
}
