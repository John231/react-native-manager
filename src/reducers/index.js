import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import EmployeeFormReduer from "./EmployeeFormReducer";
import EmployeeReducer from "./EmployeeReducer";

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReduer,
  employees: EmployeeReducer
});
