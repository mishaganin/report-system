namespace DataAccess.Models.MessageSources;

public abstract class MessageSource
{
    protected MessageSource(Guid id, string name)
    {
        Id = id;
        Name = name;
    }

    protected MessageSource() { }

    public Guid Id { get; set; }
    public string Name { get; set; }
}