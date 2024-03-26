import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import { useState } from "react";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="blogs" element={<Body />} />
          <Route path="about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
