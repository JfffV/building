import React from "react";
import "./Header.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

export default function Header() {
  return (
    <div className="header_container">
      <div className="nav_container">
        <span className="logo">
          {" "}
          <Link className="nav_link" to="/home">
            Building
          </Link>{" "}
        </span>
        <ul className="nav">
          <li className="nav_element">
            <Link className="nav_link" to="/about">
              About Us
            </Link>
          </li>
          <li className="nav_element">
            <Link className="nav_link" to="/ourWorks">
              Our Works
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
