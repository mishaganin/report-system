using System.ComponentModel.DataAnnotations;

namespace DataAccess.Models;

public class Account
{
    public Account(Guid id, Employee employee, string login, string password)
    {
        Id = id;
        Employee = employee;
        Login = login;
        Password = password;
        Messages = new List<Message>();
    }

    protected Account() { }

    [Key]
    public Guid Id { get; set; }
    public Employee Employee { get; set; }
    [Required]
    [MinLength(3)]
    [MaxLength(20)]
    public string Login { get; set; }
    [Required]
    [MinLength(3)]
    [MaxLength(20)]
    public string Password { get; set; }
    public List<Message> Messages { get; set; } = new List<Message>();
}