using Application.Dto;

namespace Application.Services;

public interface IMessageSourceService
{
    public Task<MessageDto> SendMessageAsync(Guid accountId, Guid messageSourceId, string text);
    public Task<MessageSourceDto> CreateMessageSourceAsync(string name, string type);
}