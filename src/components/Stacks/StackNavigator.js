import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Buy from "../../Pages/Buy";
import Payment from "../../Pages/Payments";

const StackNavigator = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Buy />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
};

export default StackNavigator;
