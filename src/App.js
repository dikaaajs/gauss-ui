import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Gauss from "./pages/gauss";

export default function App() {
  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gauss" element={<Gauss />} />
      </Routes>
    </div>
  );
}
