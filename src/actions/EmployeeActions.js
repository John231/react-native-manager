import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from "./types";

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    // access database and make reference to key path of JSON datastore
    firebase
      .database()
      .ref(`users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.employeeList({ type: "reset" });
      });
  };
};
