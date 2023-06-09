using Application.Dto;
using DataAccess.Models.Report;

namespace Application.Mapping;

public static class ReportMapping
{
    public static ReportDto AsDto(this Report report)
        => new ReportDto(report.Id, report.Actions.Select(a => a.AsDto()).ToArray());
}