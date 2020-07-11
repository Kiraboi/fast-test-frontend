import React, { useState, useEffect } from "react";
import { AuthConsumer } from "../AuthContext";
import ReactDirective from "react-directive";
import { Link } from "react-router-dom";

const Header = ({ userName, isStaff }) => {
  const handleLogout = (event) => {
    localStorage.clear("token");
    localStorage.clear("isStaff");
    localStorage.clear("userName");
    localStorage.clear("email");
    window.location = "/";
  };

  return (
    <ReactDirective>
      <nav className="navbar navbar-expand-lg navbar-white bg-white shadow-sm">
        <a className="navbar-brand" href="#">
          Fast App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/create" data-react-if={isStaff}>
                Create Service
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                {userName}
              </a>
            </li>
            <li className="nav-item active">
              <a
                className="nav-link"
                href="#"
                onClick={(event) => {
                  handleLogout(event);
                }}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </ReactDirective>
  );
};
export default (props) => (
  <AuthConsumer>
    {({ userName, isStaff }) => (
      <Header userName={userName} isStaff={isStaff} {...props}></Header>
    )}
  </AuthConsumer>
);
