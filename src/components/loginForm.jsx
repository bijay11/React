import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    //call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div className="card secure-panel-trs">
        <div className="card-body">
          <h4 className="custom-panel-heading">
            <strong>
              <i class="fa fa-sign-in" aria-hidden="true"></i> Login
            </strong>
          </h4>
          <div className="bar"></div>
          <form action="" onSubmit={this.handleSubmit}>
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", "password")}

            {this.renderButton("Login")}
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
