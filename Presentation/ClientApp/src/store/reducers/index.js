import { combineReducers } from "@reduxjs/toolkit";
import employeeReducer from "./employee";
import accountReducer from "./account";
import messageSourceReducer from "./messageSource";
import authorizationReducer from "./authorization";

const rootReducer = combineReducers({
  accountReducer,
  authorizationReducer,
  employeeReducer,
  messageSourceReducer
});

export default rootReducer;
