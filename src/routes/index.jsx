import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../views/pages/Home";

const AppRouter = () => {
  console.log(HomePage);
  return (
    <Routes>
      <Route path="/" element={HomePage} />
    </Routes>
  );
};

export default AppRouter;
