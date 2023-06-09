namespace Application.Dto;

public record EmployeeDto(Guid Id, string Name, string Position, IReadOnlyCollection<EmployeeDto> Subordinates, Guid? DirectorId);