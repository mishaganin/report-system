using System.ComponentModel.DataAnnotations;

namespace DataAccess.Models.Report;

public class Action
{
    public Action(Guid id, Employee employee, string type, Message message)
    {
        Id = id;
        Employee = employee;
        Type = type;
        Message = message;
        Time = DateTime.Now;
    }

    protected Action() {}
    [Key]
    public Guid Id { get; init; }
    public Employee Employee { get; init; }
    public string Type { get; init; }
    public Message Message { get; init; }
    public DateTime Time { get; init; }
}