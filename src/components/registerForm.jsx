import React, { Component, useState } from "react";
import Joi from "joi-browser";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from "./common/form";
class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
    startDate: new Date(),
  };

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).max(15).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = () => {
    //call the server
    console.log("Submitted");
  };

  handleDateChange = (date) => {
    this.setState({ startDate: date });
  };
  render() {
    // const [selectedDate, setSelectedDate] = useState(null);
    return (
      <React.Fragment>
        <div className="card secure-panel-trs">
          <div className="card-body">
            <h4 className="custom-panel-heading">
              <strong>
                <i class="fa fa-sign-in" aria-hidden="true"></i> Register
              </strong>
            </h4>
            <div className="bar"></div>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              {this.renderInput("name", "Name")}
              <DatePicker
                selected={this.state.startDate}
                onDateChange={this.handleDateChange}
                className="form-control"
                name="startDate"
                dateFormat="MM/dd/yyyy"
              />
              <br />

              {this.renderButton("Register")}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
