using Application.Dto;
using Application.Services;
using Microsoft.AspNetCore.Mvc;
using Presentation.Models.CreateMessageSourceModel;
using Presentation.Models.SendMessageModel;

namespace Presentation.Controllers;

[ApiController]
[Route("[controller]")]
public class MessageSourceController : ControllerBase
{
    private readonly IMessageSourceService _service;

    public MessageSourceController(IMessageSourceService service)
    {
        _service = service;
    }

    [HttpPost("send-message")]
    public async Task<ActionResult<MessageDto>> SendMessageAsync(SendMessageModel model)
    {
        return Ok(await _service.SendMessageAsync(model.AccountId, model.MessageSourceId, model.Text));
    }

    [HttpPost("create-message-source")]
    public async Task<ActionResult<MessageSourceDto>> CreateMessageSourceAsync(CreateMessageSourceModel model)
    {
        return Ok(await _service.CreateMessageSourceAsync(model.Name, model.Type));
    }
}