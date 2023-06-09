using System.Text.Json.Nodes;
using System.Text.Json.Serialization;
using Application.Dto;
using Application.Exceptions;
using Application.Extensions;
using Application.Mapping;
using DataAccess;
using DataAccess.Models;
using DataAccess.Models.Report;
using Microsoft.EntityFrameworkCore;
using Action = DataAccess.Models.Report.Action;

namespace Application.Services.Implementations;

public class EmployeeService : IEmployeeService
{
    private readonly DatabaseContext _context;

    public EmployeeService(DatabaseContext context)
    {
        _context = context;
    }

    public async Task<EmployeeDto> CreateEmployeeAsync(string name, string position, List<Guid> subordinateIds,
        Guid? directorId)
    {
        Employee? director = await _context.Employees.FindEntityAsync(directorId);
        var subordinatesTasks = subordinateIds.Select(async id => await _context.Employees.GetEntityAsync(id)).ToList();
        var subordinates = (await Task.WhenAll(subordinatesTasks)).ToList();
        if (director != null && director.Position != "Director")
        {
            director = null;
        }

        var employee = new Employee(Guid.NewGuid(), name, position, subordinates, director);

        _context.Employees.Add(employee);
        await _context.SaveChangesAsync();

        return employee.AsDto();
    }

    public async Task<EmployeeDto> DeleteEmployeeAsync(Guid id)
    {
        Employee employee = await _context.Employees.GetEntityAsync(id);
        _context.Employees.Remove(employee);
        await _context.SaveChangesAsync();

        return employee.AsDto();
    }

    public async Task<ActionDto> MakeActionAsync(Guid employeeId, Guid messageId, string type)
    {
        if (type != "Read" && type != "Mark as unread" && type != "Mark as spam")
        {
            throw new InvalidActionTypeException(type);
        }

        Employee employee = await _context.Employees.GetEntityAsync(employeeId);
        Message message = await _context.Messages.GetEntityAsync(messageId);
        Session session = await _context.Sessions.GetEntityAsync((await _context.Sessions.FirstAsync(s => s.EmployeeId == employeeId)).Id);
        message.Status = type;
        _context.Messages.Update(message);
        var action = new Action(Guid.NewGuid(), employee, type, message);
        session.Actions.Add(action);
        _context.Sessions.Update(session);
        _context.Actions.Add(action);
        await _context.SaveChangesAsync();

        return action.AsDto();
    }

    public async Task<ReportDto?> AddReportAsync(Guid employeeId)
    {
        Employee? employee = await _context.Employees.GetEntityAsync(employeeId);
        if (employee?.Position == "Director")
        {
            var actions = new List<Action>();

            foreach (var sub in _context.Employees)
            {
                if (sub.Director?.Id == employee.Id)
                {
                    foreach (var action in _context.Actions)
                    {
                        if (action.Employee.Id == sub.Id)
                        {
                            actions.Add(action);
                        }
                    }
                }
            }

            return await ConfigureReportAsync(actions);
        }

        Console.WriteLine("You are not allowed to do this!");

        return null;
    }

    private async Task<ReportDto> ConfigureReportAsync(ICollection<Action> actions)
    {
        var report = new Report(Guid.NewGuid(), actions);
        _context.Reports.Add(report);
        await _context.SaveChangesAsync();

        return report.AsDto();
    }
}