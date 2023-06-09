import VIEWCONTROLLERS from "../actionTypes/actionTypes";

export const addMessageSource = (messageSource) => ({
  type: VIEWCONTROLLERS.ADD_MESSAGE_SOURCE,
  data: messageSource
});

export const sendMessage = (message) => ({
  type: VIEWCONTROLLERS.SEND_MESSAGE,
  data: message
});
