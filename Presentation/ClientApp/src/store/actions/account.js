import VIEWCONTROLLERS from "../actionTypes/actionTypes";

export const addAccount = (account) => ({
  type: VIEWCONTROLLERS.ADD_ACCOUNT,
  data: account
});
