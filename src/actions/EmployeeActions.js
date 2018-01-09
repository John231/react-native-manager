import { EMPLOYEE_UPDATE } from "./types";

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  console.log("Name: %s, Tel: %s, Shift: %s ", name, phone, shift);
};
