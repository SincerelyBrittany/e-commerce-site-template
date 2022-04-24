import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navigation from "./Components/Navigation/navigation";
import HomePage from "./Components/Pages/Homepage/homepage";
import SignIn from "./Components/Sign-in/sign-in";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* <Route index element={<Home />} /> */}
        <Route index element={<HomePage />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
