using Microsoft.EntityFrameworkCore;
using FinanceAppBack.Models;

namespace FinanceAppBack.Data
{
    public class FinanceAppContext : DbContext
    {
        public FinanceAppContext(DbContextOptions<FinanceAppContext> options)
            : base(options)
        {
        }

        public DbSet<Account> Accounts { get; set; }
        public DbSet<Investment> Investments { get; set; }
        public DbSet<Simbol> Simbols { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Account>().ToTable("accounts");
            modelBuilder.Entity<Investment>().ToTable("investments");
            modelBuilder.Entity<Simbol>().ToTable("simbols");

            modelBuilder.Entity<Investment>()
                .HasOne(i => i.Account)
                .WithMany(a => a.Investments)
                .HasForeignKey(i => i.AccountId);
        }
    }
}