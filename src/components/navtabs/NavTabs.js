import React from "react";
import { NavLink } from "react-router-dom";
import './NavTabs.css'

function NavTabs() {
  return (
      <ul className="nav nav-tabs nav-bar">
        <li className="nav-item">
          <NavLink to="/about" exact className="nav-link nav-text">
            About Joe
        </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/education" className="nav-link nav-text">
            Education
        </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/certificate" className="nav-link nav-text">
            Certificate
        </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/projects" className="nav-link nav-text">
            Projects
        </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link nav-text">
            Contact
        </NavLink>
        </li>
      </ul>
  );
}

export default NavTabs;