import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../../Pages/Login";

const StackLogin = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default StackLogin;
