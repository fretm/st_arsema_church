import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-light bg-light navbar-expand-lg">
        <Link className="navbar-brand" to="/">
          <i class="fas fa-church fa-2x"></i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-align-right text-dark"></i>
        </button>
        <div className="collapse navbar-collapse p" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                HOME <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                I'M NEW
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                GET CONNECTED
              </a>
            </li>
            <li className="nav-item dropdown">
              <div className="dropdown">
                <a className="nav-link" href="#">
                  FORMS
                </a>
                <div className="dropdown-content">
                  <a href="#">forms 1</a>
                  <a href="#">forms 2</a>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CONTACT US
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                DONATE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                LIVE
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default NavBar;
