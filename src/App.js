import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import { useState } from "react";
import Our_works from "./components/Our_works";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="our_works" element={<Our_works />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
