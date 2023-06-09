namespace Application.Exceptions;

public class InvalidActionTypeException : Exception
{
    public InvalidActionTypeException(string type)
    {
        Type = type;
    }

    public string Type { get; }
}