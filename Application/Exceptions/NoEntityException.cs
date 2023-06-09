namespace Application.Exceptions;

public class NoEntityException : Exception
{
    public NoEntityException(Guid id)
    {
        Id = id;
    }

    public Guid Id { get; }
}