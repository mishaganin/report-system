import VIEWCONTROLLERS from "../actionTypes/actionTypes";

const initialState = {
  employees: [],
  actions: [],
  reports: []
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEWCONTROLLERS.ADD_EMPLOYEE: {
      const { id, name, position, subordinates } = action.data;

      console.log(id, name, position, subordinates);
      return {
        ...state,
        employees: [...state.employees, action.data]
      };
    }
    case VIEWCONTROLLERS.DELETE_EMPLOYEE: {
      const { id, name, position, subordinates } = action.data;

      console.log(id, name, position, subordinates);
      const employees = state.employees.filter(e => e.id !== id);
      return {
        ...state,
        employees
      };
    }
    case VIEWCONTROLLERS.MAKE_ACTION: {
      const { employeeId, type, messageId } = action.data;

      console.log(employeeId, type, messageId);
      return {
        ...state,
        actions: [...state.actions, action.data]
      };
    }
    case VIEWCONTROLLERS.ADD_REPORT: {
      const { employeeId } = action.data;

      console.log(employeeId);
      return {
        ...state,
        reports: [...state.reports, action.data]
      };
    }
    default:
      return state;
  }
}

export default employeeReducer;
