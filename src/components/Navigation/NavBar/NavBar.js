// infrastructure
import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/auth";
import { removeFromLocalStorage } from "../../../helpers/auth";

// components
import NavButton from "../NavButton/NavButton";

const NavBar = () => {
  const [auth, setAuth] = useContext(AuthContext);

  const logOut = () => {
    setAuth(null);
    removeFromLocalStorage();
  };

  return (
    <ul className="nav shadow mb-2 d-flex nav-pills justify-content-center">
      {/*<NavButton title="Home" to="/" />*/}
      {auth !== null && auth !== undefined ? (
        <>
          <div class="dropdown show p-2 d-flex">
            <a
              class="btn btn-secondary dropdown-toggle"
              href="/dashboard"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {auth?.user?.name}
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <div class="dropdown-item">
                <NavLink className="text-decoration-none" to="/dashboard">
                  Dashboard
                </NavLink>
              </div>
              <div class="dropdown-item">
                <NavLink
                  className="text-decoration-none"
                  to="/"
                  onClick={logOut}
                >
                  Log Out
                </NavLink>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <NavButton title="Log In" to="/login" />
          <NavButton title="Register" to="/register" />
        </>
      )}
    </ul>
  );
};

export default NavBar;
