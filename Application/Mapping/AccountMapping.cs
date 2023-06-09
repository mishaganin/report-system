using Application.Dto;
using DataAccess.Models;

namespace Application.Mapping;

public static class AccountMapping
{
    public static AccountDto AsDto(this Account account)
        => new AccountDto(account.Id, account.Employee.Id, account.Login, account.Password);
}