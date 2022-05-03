import React from "react";
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">Start Bootstrap</span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="img/profile.jpg"
            alt=""
          />
        </span>
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
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link js-scroll-trigger" >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/experience" className="nav-link js-scroll-trigger" >
              Experience
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/education" className="nav-link js-scroll-trigger" >
              Education
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/customers" className="nav-link js-scroll-trigger" >
              Customers
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#interests">
              Interests
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#awards">
              Awards
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
