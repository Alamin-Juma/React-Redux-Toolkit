import { useState } from "react";

import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/users/userSlice";
import { onAuthStateChangedListener } from "./utils/firebase.utils";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";

import { NavBar } from "./routes/navigation/NavBar";
import { Shop } from "./routes/shop/Shop";
import { Home } from "./routes/home/Home";
import { AddProducts } from "./routes/addProducts/AddProducts";
import { PageNotFound } from "./components/pageNotFound/PageNotFound";

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
      <Router>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/signIn" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          {user ? (
            <>
              <Route path="/shop" element={<Shop />} />
              <Route path="/addProds" element={<AddProducts />} />
            </>
          ) : (
            <Route path="/pageNotFound" element={<PageNotFound />} />
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
