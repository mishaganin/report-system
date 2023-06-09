using Application.Dto;

namespace Application.Services;

public interface IAuthorizationService
{
    public Task<bool> LoginAsync(string login, string password, Guid employeeId);
    public Task<AccountDto> RegisterAsync(string login, string password, Guid employeeId);
}