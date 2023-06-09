using System.Reflection;
using DataAccess.Models;
using DataAccess.Models.MessageSources;
using DataAccess.Models.MessageSources.Implementations;
using DataAccess.Models.Report;
using Microsoft.EntityFrameworkCore;
using Action = DataAccess.Models.Report.Action;

namespace DataAccess;

public class DatabaseContext : DbContext
{
    public DbSet<Employee> Employees { get; set; }
    public DbSet<Account> Accounts { get; set; }
    public DbSet<Session> Sessions { get; set; }
    public DbSet<Action> Actions { get; set; }
    public DbSet<Report> Reports { get; set; }
    public DbSet<Message> Messages { get; set; }
    public DbSet<MessageSource> MessageSources { get; set; }
    public DbSet<Phone> Phones { get; set; }
    public DbSet<Mail> Mails { get; set; }

    public DatabaseContext()
    {
        Database.EnsureCreated();
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite(@"Data Source=C:\Users\Misha\RiderProjects\mishaganin\Lab6\Presentation\database.db", options =>
        {
            options.MigrationsAssembly(Assembly.GetExecutingAssembly().FullName);
        });
        base.OnConfiguring(optionsBuilder);
    }
}