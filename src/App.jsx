import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Home from "./Home";
import VillaList from "./Villalist";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/villaList" element={<VillaList />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </main>
        <footer className="bg-dark text-white text-center py-3 mt-auto">
          <div className="container">
            &copy; {new Date().getFullYear()} Paradise Villas. All rights
            reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
