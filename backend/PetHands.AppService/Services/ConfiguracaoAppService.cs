using PetHands.AppService.Interfaces;
using PetHands.Infrastructure.Interfaces;

namespace PetHands.AppService.Services
{
    public class ConfiguracaoAppService : IConfiguracaoAppService
    {
        private readonly IConfiguracaoRepository _configuracaoRepository;

        public ConfiguracaoAppService(IConfiguracaoRepository configuracaoRepository)
        {
            _configuracaoRepository = configuracaoRepository;
        }

        public string GetConfiguracao(string nome)
        {
            var config = _configuracaoRepository.GetByName(nome);
            return config?.Valor;
        }

        //public string GetMenu(string dominio)
        //{
        //    var mockJson = @"
        //        [
        //            {
        //                ""title"": ""Dashboard Pet"",
        //                ""url"": ""/dashboard""
        //            },
        //            {
        //                ""title"": ""Cadastro do Pet"",
        //                ""url"": ""/cadastro""
        //            },
        //            {
        //                ""title"": ""Plano Pet"",
        //                ""url"": ""/plano""
        //            },
        //            {
        //                ""title"": ""Carteirinha Pet"",
        //                ""url"": ""/carteirinha""
        //            }
        //        ]";

        //    return mockJson;
        //}

        public string GetMenu(string dominio)
        {
            if (dominio != "Menu")
            {
                return null; // ou um valor padrão, se necessário
            }

            // Buscar a configuração "Menu" no repositório
            var config = _configuracaoRepository.GetByName(dominio);
            return config?.Valor; // Retorna o valor da configuração
        }
    }
}
