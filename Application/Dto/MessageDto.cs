namespace Application.Dto;

public record MessageDto(Guid Id, string Text, Guid MessageSourceId, string Status);