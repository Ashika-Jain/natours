import React from "react";
import "../../App.css";
import "./navbar.css";

import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <section className="navbarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo"></a>
          <h1>Natours</h1>
        </div>

        
        <div className="navBar">
          <ul className="navLists flex">
            <button className="btn">
              <li className="navItem">
                <Link to="/" className="navLink">
                  Home
                </Link>
              </li>
            </button>

            <button className="btn">
              <li className="navItem">
                <Link to="/bookings" className="navLink">
                  Bookings
                </Link>
              </li>
            </button>


            <button className="btn">
              <li className="navItem">
                <Link to="/chat" className="navLink">
                  Chat
                </Link>
              </li>
            </button>

            <button className="btn">
              <li className="navItem">
                <Link to="/map" className="navLink">
                  Map Search
                </Link>
              </li>
            </button>

            <button className="btn">
              <li className="navItem">
                <Link to="/auth" className="navLink">
                  Sign In
                </Link>
              </li>
            </button>

            <button className="btn">
              <li className="navItem">
                <Link to="/user" className="navLink">
                  Profile
                </Link>
              </li>
            </button>
          </ul>
        </div>
      </header>
    </section>
  );
}
