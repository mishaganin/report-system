using Application.Dto;
using Action = DataAccess.Models;

namespace Application.Mapping;

public static class ActionMapping
{
    public static ActionDto AsDto(this DataAccess.Models.Report.Action action)
        => new ActionDto(action.Employee.Id, action.Type, action.Message?.Id);
}