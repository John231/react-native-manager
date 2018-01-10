import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import EmployeeForm from "./EmployeeForm";
import { Card, CardSection, Button } from "./common";
import { employeeUpdate } from "../actions";

class EmployeeEdit extends Component {
  componentWillMount() {
    //iterate over employee prop and update reducer
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    console.log("Name: %s, Phone: %s, Shift: %s", name, phone, shift);
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
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeEdit);
