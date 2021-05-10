import React from "react";
import { Link } from "react-router-dom";

import "./App.css";
import birdhouse from "./Images/homeicon.svg";

const Header = () => {
  return (
    <nav id="nav" class="navbar navbar-dark navbar-expand-lg">
      <Link class="btn text-light font-weight-bold" to="/">
        <img
          className="homeIcon"
          src={birdhouse}
          width="45"
          height="30"
          alt=""
        />
        Home
      </Link>
      <button
        class="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#mainNavBar"
        aria-expanded="false"
        aria-controls="navbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNavBar">
        <div class="navbar-nav ml-auto">
          <Link
            class="btn text-light font-weight-bold nav-item nav-link"
            to="/Search"
          >
            Search
          </Link>
          <Link
            class="btn text-light font-weight-bold nav-item nav-link"
            to="/Random"
          >
            Random
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
