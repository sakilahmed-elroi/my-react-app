import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Home from "./Home";
import VillaList from "./Villalist";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Villalist" element={<VillaList />} />
      </Routes>
    </Router>
  );
}

export default App;
