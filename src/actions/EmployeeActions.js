import firebase from "firebase";

import { EMPLOYEE_UPDATE } from "./types";

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  // access database and make reference to key path of JSON datastore
  firebase
    .database()
    .ref(`users/${currentUser.uid}/employees`)
    .push({ name, phone, shift });
};
