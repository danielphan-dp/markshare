import React from 'react';
import { NavLink } from 'react-router-dom';

const NavButton = ({ title, to, ...rest }) => {
  return (
    <li className="nav-item p-2 d-flex">
      <NavLink className="nav-link" aria-current="page" to={to} {...rest}>
        {title}
      </NavLink>
    </li>
  );
};

export default NavButton;
