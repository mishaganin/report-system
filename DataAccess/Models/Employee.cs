using System.ComponentModel.DataAnnotations;

namespace DataAccess.Models;

public class Employee
{
    public Employee(Guid id, string name, string position, List<Employee> subordinates, Employee director = null)
    {
        Id = id;
        Name = name;
        Position = position;
        Subordinates = subordinates;
        Director = director;
    }

    protected Employee() { }

    [Key]
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Position { get; set; }
    public List<Employee> Subordinates { get; set; } = new List<Employee>();
    public Employee Director { get; set; }
}