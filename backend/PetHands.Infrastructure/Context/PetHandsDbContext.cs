using Microsoft.EntityFrameworkCore;
using PetHands.Domain.Entities;

namespace PetHands.Infrastructure.Context
{
    public class PetHandsDbContext : DbContext
    {
        public PetHandsDbContext(DbContextOptions<PetHandsDbContext> options) : base(options) { }

        public DbSet<Configuracao> Configuracoes { get; set; }
    }
}
