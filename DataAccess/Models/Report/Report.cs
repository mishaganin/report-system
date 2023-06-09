using System.ComponentModel.DataAnnotations;

namespace DataAccess.Models.Report;

public class Report
{
    public Report(Guid id, ICollection<Action> actions)
    {
        Id = id;
        Actions = actions;
    }

    protected Report() {}

    [Key]
    public Guid Id { get; set; }
    public ICollection<Action> Actions { get; set; } = new List<Action>();
}