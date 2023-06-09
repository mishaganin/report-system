using Application.Dto;
using Application.Extensions;
using Application.Mapping;
using DataAccess;
using DataAccess.Models;

namespace Application.Services.Implementations;

public class AccountService : IAccountService
{
    private readonly DatabaseContext _context;

    public AccountService(DatabaseContext context)
    {
        _context = context;
    }

    public async Task<AccountDto> CreateAccountAsync(Guid employeeId, string login, string password)
    {
        Employee employee = await _context.Employees.GetEntityAsync(employeeId);
        var account = new Account(Guid.NewGuid(), employee, login, password);

        _context.Accounts.Add(account);
        await _context.SaveChangesAsync();

        return account.AsDto();
    }

    public async Task<AccountDto> AddEmployeeToAccountAsync(Guid accountId, Guid employeeId)
    {
        Account account = await _context.Accounts.GetEntityAsync(accountId);
        Employee employee = await _context.Employees.GetEntityAsync(employeeId);
        account.Employee = employee;

        _context.Accounts.Update(account);
        await _context.SaveChangesAsync();

        return account.AsDto();
    }
}