import { useState } from "react";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { login, logout, selectUser } from "./features/users/userSlice";
import { onAuthStateChangedListener } from "./utils/firebase.utils";
import {Login} from "./components/auth/Login";

import "./App.css";

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
        <div className="app__body">
          <div>
            <h1>Hello {user.displayName}!</h1>
            <p>{user.email}</p>
            <img src={user.photoUrl} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
