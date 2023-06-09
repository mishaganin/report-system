namespace Presentation.Models.SendMessageModel;

public record SendMessageModel(Guid AccountId, Guid MessageSourceId, string Text);