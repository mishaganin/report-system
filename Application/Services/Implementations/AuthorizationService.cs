using Application.Dto;
using Application.Exceptions;
using Application.Extensions;
using Application.Mapping;
using DataAccess;
using DataAccess.Models;
using Microsoft.EntityFrameworkCore;

namespace Application.Services.Implementations;

public class AuthorizationService : IAuthorizationService
{
    private readonly DatabaseContext _context;
    public AuthorizationService(DatabaseContext context)
    {
        _context = context;
    }

    public async Task<bool> LoginAsync(string login, string password, Guid employeeId)
    {
        if (await FindSession(employeeId) != null)
        {
            throw new AlreadyLoggedInException(employeeId);
        }

        var accounts = _context.Accounts.ToList();
        Account? account = accounts.Find(account => account.Login == login && account.Password == password);
        if (account != null)
        {
            var session = new Session(Guid.NewGuid(), employeeId, account);
            _context.Sessions.Add(session);
            await _context.SaveChangesAsync();
            return true;
        }

        return false;
    }

    public async Task<AccountDto> RegisterAsync(string login, string password, Guid employeeId)
    {
        Employee employee = await _context.Employees.GetEntityAsync(employeeId);
        var account = new Account(Guid.NewGuid(), employee, login, password);
        var session = new Session(Guid.NewGuid(), employeeId, account);
        _context.Sessions.Add(session);
        await _context.SaveChangesAsync();
        return account.AsDto();
    }

    private async Task<SessionDto?> FindSession(Guid employeeId)
    {
        Guid? id = (await _context.Sessions.FirstOrDefaultAsync(session => session.Account.Employee.Id == employeeId))?.Id;
        Session? session = await _context.Sessions.FindEntityAsync(id);
        return session?.AsDto();
    }
}