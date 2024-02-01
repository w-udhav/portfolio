import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingScreen from "./LandingScreen";
import Main from "./Main";

export default function Layout() {
  const landingPage = () => {
    return <LandingScreen />;
    // return <Main />;
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/home" element={<Main />} />
      </Routes>
    </div>
  );
}
