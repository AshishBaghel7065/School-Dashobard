import React from "react";
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
           
              <li className="nav-item">
                <Link className="nav-link" to={"/dashboard"}>
                  Dashboard
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
            <Link to={"/admin"}>  <button className="btn btn-outline-success" type="submit">
                Login
              </button></Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
