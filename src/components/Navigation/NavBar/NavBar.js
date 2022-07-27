import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <ul className="nav shadow mb-2 d-flex nav-pills justify-content-center">
      {/* TODO: refactor */}
      <li className="nav-item mt-2 mb-2 d-flex">
        <NavLink className="nav-link" aria-current="page" to="/">
          Home
        </NavLink>
      </li>

      {/* TODO: refactor */}
      <li className="nav-item mt-2 mb-2 d-flex">
        <NavLink className="nav-link" aria-current="page" to="/register">
          Register
        </NavLink>
      </li>

      {/* TODO: refactor */}
      <li className="nav-item mt-2 mb-2 d-flex">
        <NavLink className="nav-link" aria-current="page" to="/login">
          Log In
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
