namespace DataAccess.Models.MessageSources.Implementations;

public class Phone : MessageSource
{
    public Phone(Guid id, string name)
        : base(id, name)
    {
        Id = id;
        Name = name;
    }

    protected Phone() { }
}