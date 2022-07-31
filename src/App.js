import React from "react";

import Home from "./templates/Home";
import Contact from "./templates/Contact";
import About from "./templates/About";
import Privacy from "./templates/Privacy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hamburger from "./components/Burger";

import "./css/fonts.css";
import "./css/reflex.css";
import "./css/global.css";

function App() {
  return (
      <Router>
            <Hamburger />
            <div id="pageWrap" className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/privacy" element={<Privacy />}></Route>
                </Routes>
                <Footer />
            </div>
      </Router>
  );
}

export default App;
