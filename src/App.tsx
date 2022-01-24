import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Router from "./router/router";

const App = () => {
  return (
    <React.Fragment>
      <Router />
      <NavBar />
    </React.Fragment>
  );
};

export default App;
