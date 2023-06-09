using Application.Dto;

namespace Application.Services;

public interface IEmployeeService
{
    public Task<EmployeeDto> CreateEmployeeAsync(string name, string position, List<Guid> subordinateIds,
        Guid? directorId);
    public Task<EmployeeDto> DeleteEmployeeAsync(Guid id);
    public Task<ActionDto> MakeActionAsync(Guid employeeId, Guid messageId, string type);
    public Task<ReportDto?> AddReportAsync(Guid employeeId);
}