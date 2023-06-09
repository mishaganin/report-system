import VIEWCONTROLLERS from "../actionTypes/actionTypes";

const initialState = {
  accounts: [],
};

const authorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEWCONTROLLERS.REGISTER: {
      const { id, login, password } = action.data;

      console.log(id, login, password);
      return {
        ...state,
        accounts: [...state.accounts, action.data]
      };
    }
    default:
      return state;
  }
}

export default authorizationReducer;
