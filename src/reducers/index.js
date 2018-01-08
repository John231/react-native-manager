import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import EmployeeFormReduer from "./EmployeeFormReducer";

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReduer
});
