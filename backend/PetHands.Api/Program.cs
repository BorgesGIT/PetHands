using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using PetHands.Domain.Entities;
using PetHands.Infrastructure.Context;
using System.Linq;

namespace PetHands.Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();

            // Inicialização de dados mockados
            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;

                // Obtenha o contexto e popule com dados mockados
                var context = services.GetRequiredService<PetHandsDbContext>();
                SeedData(context);
            }

            host.Run();
        }

        // Definição do método CreateHostBuilder
        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
        private static void SeedData(PetHandsDbContext context)
        {
            if (!context.Configuracoes.Any())
            {
                context.Configuracoes.Add(new Configuracao
                {
                    Id = 1,
                    Nome = "Menu",
                    Valor = "[{\"title\":\"Dashboard Pet\",\"url\":\"/dashboard\"},{\"title\":\"Cadastro do Pet\",\"url\":\"/cadastro\"},{\"title\":\"Plano Pet\",\"url\":\"/plano\"},{\"title\":\"Carteirinha Pet\",\"url\":\"/carteirinha\"}]"
                });
                context.SaveChanges();
            }
        }
    }
}
