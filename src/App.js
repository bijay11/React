import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import LoginForm from "./components/loginForm";
import Home from "./components/home";
import Beneficiaries from "./components/Beneficiaries";
import NotFound from "./components/common/notFound";
import Navbar from "./components/navBar";
import RegisterForm from "./components/registerForm";
import NewBeneficiaryForm from "./components/NewBeneficiaryForm";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container-fluid">
        <Switch>
          <Route path="/register" component={RegisterForm}></Route>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/home" component={Home}></Route>
          {/* <Route
            path="/beneficiaries/details"
            component={BeneficiariesDetails}
          ></Route> */}
          <Route
            path="/beneficiaries/:id"
            component={NewBeneficiaryForm}
          ></Route>

          <Route path="/beneficiaries" component={Beneficiaries}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
