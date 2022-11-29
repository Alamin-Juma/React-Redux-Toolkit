import React, { Fragment } from "react";

import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/users/userSlice";

import { signOutUser } from "../../utils/firebase.utils";

import ecommerceLogo from "../../assets/download.png";

import "./Nav.styles.css";

export const NavBar = () => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(logout());
    signOutUser();
  };

  const user = useSelector(selectUser);

  return (
    <Fragment>
      <div className="navigation">
        <div>
          <Link className="logo-container">
            <img src={ecommerceLogo} className="logo" />
          </Link>
        </div>
        <div className="nav-links-container">
          <div className="nav-link" to="/shop">
            GO TO SHOP
          </div>
          {user ? (
            <span className="nav-link" onClick={signOut}>
              SIGN OUT
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </Fragment>
  );
};
