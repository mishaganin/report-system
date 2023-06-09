using Application.Dto;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Presentation.Models.LoginModel;
using Presentation.Models.RegisterModel;

namespace Presentation.Controllers;

[ApiController]
[Route("[controller]")]
public class AuthorizationController : ControllerBase
{
    private readonly Application.Services.IAuthorizationService _service;

    public AuthorizationController(Application.Services.IAuthorizationService service)
    {
        _service = service;
    }

    [HttpPost("login")]
    public async Task<ActionResult<bool>> Login(LoginModel model)
    {
        return Ok(await _service.LoginAsync(model.Login, model.Password, model.EmployeeId));
    }

    [HttpPost("register")]
    public async Task<ActionResult<AccountDto>> Register(RegisterModel model)
    {
        return Ok(await _service.RegisterAsync(model.Login, model.Password, model.EmployeeId));
    }
}