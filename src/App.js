import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navigation from "./Components/Navigation/navigation";
import HomePage from "./Components/Pages/Homepage/homepage";

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
