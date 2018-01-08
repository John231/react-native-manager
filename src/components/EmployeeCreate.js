import React, { Component } from "react";
import { connect } from "react-redux";

import { Card, CardSection, Input, Button } from "./common";
import { employeeUpdate } from "../actions";

class EmployeeCreate extends Component {
  render() {
    const { name, phone } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={name}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: "name", value })
            }
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="0123456789"
            value={phone}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: "phone", value })
            }
          />
        </CardSection>
        <CardSection />
        <CardSection>
          <Button>{"Save"}</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
