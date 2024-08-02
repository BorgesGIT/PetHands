using Moq;
using PetHands.AppService.Interfaces;
using PetHands.AppService.Services;
using PetHands.Infrastructure.Interfaces;
using Xunit;

namespace PetHands.UnitTests.AppServices
{
    public class ConfiguracaoAppServiceTests
    {
        private readonly Mock<IConfiguracaoRepository> _configuracaoRepositoryMock;
        private readonly IConfiguracaoAppService _configuracaoAppService;

        public ConfiguracaoAppServiceTests()
        {
            _configuracaoRepositoryMock = new Mock<IConfiguracaoRepository>();
            _configuracaoAppService = new ConfiguracaoAppService(_configuracaoRepositoryMock.Object);
        }

        [Fact]
        public void GetConfiguracao_ShouldReturnValor()
        {
            // Arrange
            var nome = "Teste";
            var valor = "ValorTeste";
            _configuracaoRepositoryMock.Setup(repo => repo.GetByName(nome)).Returns(new PetHands.Domain.Entities.Configuracao { Nome = nome, Valor = valor });

            // Act
            var result = _configuracaoAppService.GetConfiguracao(nome);

            // Assert
            Assert.Equal(valor, result);
        }
    }
}
