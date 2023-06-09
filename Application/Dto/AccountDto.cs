namespace Application.Dto;

public record AccountDto(Guid Id, Guid EmployeeId, string Login, string Password);