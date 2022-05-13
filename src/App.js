/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";

import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
