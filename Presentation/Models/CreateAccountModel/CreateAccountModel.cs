using DataAccess.Models;

namespace Presentation.Models.CreateAccountModel;

public record CreateAccountModel(Guid EmployeeId, string Login, string Password);