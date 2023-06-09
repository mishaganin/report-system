using Application.Dto;
using DataAccess.Models;

namespace Application.Services;

public interface IAccountService
{
    public Task<AccountDto> CreateAccountAsync(Guid employeeId, string login, string password);
    public Task<AccountDto> AddEmployeeToAccountAsync(Guid accountId, Guid employeeId);
}