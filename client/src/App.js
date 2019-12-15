import React, { Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Banner from "./components/layout/Banner";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Banner />
    </Fragment>
  );
};

export default App;
