using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using PetHands.Api.Configurations;
using PetHands.Api.Filters;
using PetHands.AppService.Interfaces;
using PetHands.AppService.Services;
using PetHands.Infrastructure.Context;
using PetHands.Infrastructure.Interfaces;
using PetHands.Infrastructure.Repositories;

namespace PetHands.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers(options =>
            {
                options.Filters.Add<ApiExceptionFilter>();
            });

            // Usar banco de dados em memória para desenvolvimento/mocks
            services.AddDbContext<PetHandsDbContext>(options =>
                options.UseInMemoryDatabase("InMemoryDb"));

            // Registro do serviço ConfiguracaoAppService
            services.AddScoped<IConfiguracaoAppService, ConfiguracaoAppService>();

            // Registro do repositório ConfiguracaoRepository
            services.AddScoped<IConfiguracaoRepository, ConfiguracaoRepository>();

            services.AddSwagger();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "PetHands API V1");
                c.RoutePrefix = string.Empty;
            });
        }
    }
}
