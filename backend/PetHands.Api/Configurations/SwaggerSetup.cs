using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;

namespace PetHands.Api.Configurations
{
    public static class SwaggerSetup
    {
        public static void AddSwagger(this IServiceCollection services)
        {
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "PetHands API", Version = "v1" });
            });
        }
    }
}
