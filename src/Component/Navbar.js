import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="header">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <a href="index.html" className="navbar-brand logo">
              <img src="assets/img/logo.png" className="img-fluid" alt="Logo" />
            </a>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <a href="index.html" className="menu-logo">
                <img
                  src="assets/img/logo.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </a>
              <a id="menu_close" className="menu-close" href="#">
                <i className="fas fa-times"></i>
              </a>
            </div>
            <ul className="main-nav">
              <li className="active has-submenu">
                <a href="index.html">
                  Home <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="submenu">
                  <li className="active">
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="index-2.html">Home-2</a>
                  </li>
                  {/* Add valid href values for other submenu items */}
                </ul>
              </li>
              <li className="has-submenu">
                <a href="#">
                  For Employers <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="submenu">
                  {/* Add valid href values for submenu items */}
                </ul>
              </li>
              <li className="has-submenu">
                <a href="#">
                  For Freelancer <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="submenu">
                  {/* Add valid href values for submenu items */}
                </ul>
              </li>
              <li className="has-submenu">
                <a href="#">
                  Pages <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="submenu">
                  {/* Add valid href values for submenu items */}
                </ul>
              </li>
              <li className="has-submenu">
                <a href="#">
                  Blog <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="submenu">
                  {/* Add valid href values for submenu items */}
                </ul>
              </li>
              <li className="has-submenu">
                <Link to="/alert">
                  Alert <i className="fas fa-chevron-down"></i>
                </Link>
                <ul className="submenu">
                  {/* Add valid href values for submenu items */}
                </ul>
              </li>{" "}
              <li className="has-submenu">
                <Link to="/reply">
                  Reply <i className="fas fa-chevron-down"></i>
                </Link>
                <ul className="submenu">
                  {/* Add valid href values for submenu items */}
                </ul>
              </li>
              <li className="has-submenu">
                <Link to="/project">
                  Projects <i className="fas fa-chevron-down"></i>
                </Link>
                <ul className="submenu">
                  {/* Add valid href values for submenu items */}
                </ul>
              </li>
              <li className="has-submenu">
                <Link to="/category">
                  Categories<i className="fas fa-chevron-down"></i>
                </Link>
                <ul className="submenu">
                  {/* Add valid href values for submenu items */}
                </ul>
              </li>
              <li></li>
            </ul>
          </div>
          <ul className="nav header-navbar-rht reg-head">
            <li>
              <a href="post-project.html" className="login-btn">
                Post a Project{" "}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
