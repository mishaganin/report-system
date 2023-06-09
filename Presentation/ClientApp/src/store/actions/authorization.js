import VIEWCONTROLLERS from "../actionTypes/actionTypes";

export const register = (account) => ({
  type: VIEWCONTROLLERS.REGISTER,
  data: account
});
