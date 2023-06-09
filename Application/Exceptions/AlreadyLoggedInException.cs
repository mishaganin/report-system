namespace Application.Exceptions;

public class AlreadyLoggedInException : Exception
{
    public AlreadyLoggedInException(Guid employeeId)
    {
        EmployeeId = employeeId;
    }

    public Guid EmployeeId { get; }
}