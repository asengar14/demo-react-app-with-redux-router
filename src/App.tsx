import { useState } from "react";

import "./index.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

const App = () => {
  

  return (
    <Routes>
      <Route path = "/" element = {<Login />} />
      <Route path = "/dashboard" element = {<Dashboard />} />
    </Routes>
  );
};

export default App;
