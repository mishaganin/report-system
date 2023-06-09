namespace Application.Exceptions;

public class InvalidMessageSourceTypeException : Exception
{
    public InvalidMessageSourceTypeException(string type)
    {
        Type = type;
    }

    public string Type { get; }
}