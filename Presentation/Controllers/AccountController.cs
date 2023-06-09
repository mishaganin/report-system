using Application.Dto;
using Application.Services;
using DataAccess.Models;
using Microsoft.AspNetCore.Mvc;
using Presentation.Models;
using Presentation.Models.AddEmployeeToAccount;
using Presentation.Models.CreateAccountModel;

namespace Presentation.Controllers;

[ApiController]
[Route("[controller]")]
public class AccountController : ControllerBase
{
    private readonly IAccountService _service;

    public AccountController(IAccountService service)
    {
        _service = service;
    }

    [HttpPost("create-account")]
    public async Task<ActionResult<AccountDto>> CreateAccountAsync(CreateAccountModel model)
    {
        AccountDto accountDto = await _service.CreateAccountAsync(model.EmployeeId, model.Login, model.Password);
        return Ok(accountDto);
    }

    [HttpPost("add-employee")]
    public async Task<ActionResult<AccountDto>> AddEmployeeToAccountAsync(AddEmployeeToAccount model)
    {
        AccountDto account = await _service.AddEmployeeToAccountAsync(model.AccountId, model.EmployeeId);
        return Ok(account);
    }
}