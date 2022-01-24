import React, { Suspense, useState } from "react";
import NavBar from "./components/NavBar";
import Router from "./router/router";

const App = () => {
  return (
    <React.Fragment>
      <Suspense fallback="...">
        <Router />
        <NavBar />
      </Suspense>
    </React.Fragment >
  );
};

export default App;
