import VIEWCONTROLLERS from "../actionTypes/actionTypes";

export const addEmployee = (employee) => ({
  type: VIEWCONTROLLERS.ADD_EMPLOYEE,
  data: employee
});

export const deleteEmployee = (employee) => ({
  type: VIEWCONTROLLERS.DELETE_EMPLOYEE,
  data: employee
});

export const makeAction = (action) => ({
  type: VIEWCONTROLLERS.MAKE_ACTION,
  data: action
});

export const addReport = (report) => ({
  type: VIEWCONTROLLERS.ADD_REPORT,
  data: report
});
