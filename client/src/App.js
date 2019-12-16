import React, { Fragment } from "react";
// import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Landing from "./components/layout/Landing";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
