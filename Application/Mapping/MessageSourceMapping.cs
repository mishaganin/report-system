using Application.Dto;
using DataAccess.Models.MessageSources;

namespace Application.Mapping;

public static class MessageSourceMapping
{
    public static MessageSourceDto AsDto(this MessageSource messageSource)
        => new MessageSourceDto(messageSource.Id, messageSource.Name);
}