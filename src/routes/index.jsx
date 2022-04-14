import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../views/components/MainLayout";
import HomePage from "../views/pages/Home";

const AppRouter = () => {
  return (
    <>
      <MainLayout />
      <Routes>
        <Route path="/" element={HomePage} />
      </Routes>
    </>
  );
};

export default AppRouter;
