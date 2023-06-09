using System.ComponentModel.DataAnnotations;
using Action = DataAccess.Models.Report.Action;

namespace DataAccess.Models;

public class Session
{
    public Session(Guid id, Guid employeeId, Account account)
    {
        Id = id;
        Account = account;
        EmployeeId = employeeId;
        Time = DateTime.Now;
        Actions = new List<Action>();
    }

    protected Session() {}

    [Key]
    public Guid Id { get; set; }
    public Account Account { get; set; }
    public Guid EmployeeId { get; set; }
    public DateTime Time { get; set; }
    public List<Action> Actions { get; set; } = new List<Action>();
}