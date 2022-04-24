import React from "react";
import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";

import HomePage from "./Components/Pages/Homepage/homepage";

const Navigation = () => {
  return (
    <div>
      <h1> THis is navigation </h1>
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* <Route index element={<Home />} /> */}
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
