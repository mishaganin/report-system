import VIEWCONTROLLERS from "../actionTypes/actionTypes";

const initialState = {
  messages: [],
  messageSources: [],
};

const messageSourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEWCONTROLLERS.ADD_MESSAGE_SOURCE: {
      const { name, type } = action.data;

      console.log(name, type);
      return {
        ...state,
        messageSources: [...state.messageSources, action.data]
      };
    }
    case VIEWCONTROLLERS.SEND_MESSAGE: {
      const { id, messageSourceId, text, status } = action.data;

      console.log(id, messageSourceId, text, status);
      return {
        ...state,
        messages: [...state.messages, action.data]
      };
    }
    default:
      return state;
  }
}

export default messageSourceReducer;
