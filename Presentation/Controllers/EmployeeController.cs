using Application.Dto;
using Application.Services;
using DataAccess.Models;
using Microsoft.AspNetCore.Mvc;
using Presentation.Models.AddReportModel;
using Presentation.Models.CreateAccountModel;
using Presentation.Models.CreateEmployeeModel;
using Presentation.Models.DeleteEmployeeModel;
using Presentation.Models.MakeActionModel;

namespace Presentation.Controllers;

[ApiController]
[Route("[controller]")]
public class EmployeeController : ControllerBase
{
    private readonly IEmployeeService _service;

    public EmployeeController(IEmployeeService service)
    {
        _service = service;
    }

    [HttpPost("create-employee")]
    public async Task<ActionResult<EmployeeDto>> CreateEmployeeAsync(CreateEmployeeModel model)
    {
        EmployeeDto employeeDto = await _service.CreateEmployeeAsync(model.Name, model.Position, model.SubordinateIds,
            model.DirectorId);

        return Ok(employeeDto);
    }

    [HttpPost("delete-employee")]
    public async Task<ActionResult<EmployeeDto>> DeleteEmployeeAsync(DeleteEmployeeModel model)
    {
        EmployeeDto employeeDto = await _service.DeleteEmployeeAsync(model.EmployeeId);
        return Ok(employeeDto);
    }

    [HttpPost("make-action")]
    public async Task<ActionResult<ActionDto>> MakeAction(MakeActionModel model)
    {
        ActionDto actionDto = await _service.MakeActionAsync(model.EmployeeId, model.MessageId, model.Type);
        return Ok(actionDto);
    }

    [HttpPost("add-report")]
    public async Task<ActionResult<ReportDto?>> AddReport(AddReportModel model)
    {
        ReportDto? reportDto = await _service.AddReportAsync(model.EmployeeId);
        return Ok(reportDto);
    }
}