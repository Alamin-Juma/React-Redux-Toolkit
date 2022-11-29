import React, { Fragment } from "react";

import { Outlet, Link, useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();
  const route = (type) => {
    switch (type) {
      case "goToShop":
        navigate("/shop");
        break;
      case "addProds":
        navigate("/addProds");
      default:
        navigate("/");
    }
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
          <Link className="nav-link" to="/goToShop">
            GO TO SHOP
          </Link>
          <Link className="nav-link" to="/addProds">
            ADD PRODUCTS
          </Link>
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
