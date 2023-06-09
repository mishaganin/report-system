import VIEWCONTROLLERS from "../actionTypes/actionTypes";

const initialState = {
  accounts: [],
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEWCONTROLLERS.ADD_ACCOUNT: {
      const { employeeId, login, password } = action.data;

      console.log(employeeId, login, password);
      return {
        ...state,
        accounts: [...state.accounts, action.data]
      };
    }
    default:
      return state;
  }
}

export default accountReducer;
