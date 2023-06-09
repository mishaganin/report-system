using DataAccess.Models;
using Action = DataAccess.Models.Report.Action;

namespace Application.Dto;

public record ReportDto(Guid Id, IReadOnlyCollection<ActionDto> Actions);