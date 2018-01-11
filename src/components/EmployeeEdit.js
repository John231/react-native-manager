import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import communications from "react-native-communications";

import EmployeeForm from "./EmployeeForm";
import { Card, CardSection, Button } from "./common";
import { employeeUpdate, employeeSave } from "../actions";

class EmployeeEdit extends Component {
  componentWillMount() {
    //iterate over employee prop and update reducer
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({
      name,
      phone,
      shift,
      uid: this.props.employee.uid
    });
  }

  onTextPress() {
    const { phone, shift } = this.props;
    communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            {"Save Changes"}
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            {"Text Schedule"}
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(
  EmployeeEdit
);
