import React from "react";
import "./Header.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

export default function Header() {
  return (
    <div className="header_container">
      <div className="nav_container">
        <span className="logo"> Building </span>
        <ul className="nav">
          <li className="nav_element">
            <Link to="/aboutUs">About Us</Link>
          </li>
          <li className="nav_element">
            <Link to="/ourWorks">Our Works</Link>
          </li>
          <li className="nav_element">Contact</li>
        </ul>
      </div>
    </div>
  );
}
