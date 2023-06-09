using Application.Dto;
using DataAccess.Models;

namespace Application.Mapping;

public static class EmployeeMapping
{
    public static EmployeeDto AsDto(this Employee employee)
        => new EmployeeDto(employee.Id, employee.Name, employee.Position, employee.Subordinates.Select(e => e.AsDto()).ToArray(), employee.Director?.Id);
}