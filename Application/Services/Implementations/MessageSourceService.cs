using Application.Dto;
using Application.Exceptions;
using Application.Extensions;
using Application.Mapping;
using DataAccess;
using DataAccess.Models;
using DataAccess.Models.MessageSources;
using DataAccess.Models.MessageSources.Implementations;

namespace Application.Services.Implementations;

public class MessageSourceService : IMessageSourceService
{
    private readonly DatabaseContext _context;

    public MessageSourceService(DatabaseContext context)
    {
        _context = context;
    }

    public async Task<MessageDto> SendMessageAsync(Guid accountId, Guid messageSourceId, string text)
    {
        Account account = await _context.Accounts.GetEntityAsync(accountId);
        MessageSource messageSource = await _context.MessageSources.GetEntityAsync(messageSourceId);
        var message = new Message(Guid.NewGuid(), text, messageSource);
        account.Messages.Add(message);
        _context.Accounts.Update(account);
        _context.Messages.Add(message);
        await _context.SaveChangesAsync();

        return message.AsDto();
    }

    public async Task<MessageSourceDto> CreateMessageSourceAsync(string name, string type)
    {
        switch (type)
        {
            case "Phone":
                MessageSource phone = new Phone(Guid.NewGuid(), name);
                _context.MessageSources.Add(phone);
                await _context.SaveChangesAsync();
                return phone.AsDto();
            case "Mail":
                MessageSource mail = new Mail(Guid.NewGuid(), name);
                _context.MessageSources.Add(mail);
                await _context.SaveChangesAsync();
                return mail.AsDto();
        }

        throw new InvalidMessageSourceTypeException(type);
    }
}