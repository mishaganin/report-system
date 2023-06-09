namespace DataAccess.Models.MessageSources.Implementations;

public class Mail : MessageSource
{
    public Mail(Guid id, string name)
        : base(id, name)
    {
        Id = id;
        Name = name;
    }

    protected Mail() { }
}