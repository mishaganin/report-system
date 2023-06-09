namespace Presentation.Models.CreateEmployeeModel;

public record CreateEmployeeModel(string Name, string Position, List<Guid> SubordinateIds, Guid? DirectorId);