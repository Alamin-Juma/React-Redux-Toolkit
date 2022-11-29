import { useState } from "react";

import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/users/userSlice";
import { onAuthStateChangedListener } from "./utils/firebase.utils";
import { Login } from "./components/auth/Login";
import { NavBar } from "./routes/navigation/NavBar";
import { Shop } from "./routes/shop/Shop";
import { Home } from './routes/home/Home'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChangedListener((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    console.log("page loaded");
  }, []);

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <Fragment>
          <Router>
            <NavBar />
            <Routes>
            <Route path="/home" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
            </Routes>
          </Router>
        </Fragment>
      )}
    </div>
  );
}

export default App;
