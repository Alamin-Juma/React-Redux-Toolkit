import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase.utils";

import { useDispatch } from "react-redux";
import { login } from "../../features/users/userSlice";

import "./Login.css";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const routeToLogin = () => {
    navigate("/");
  };

  const register = () => {
    if (!name) alert("Please enter a name");

    createAuthUserWithEmailAndPassword(email, password).then((userAuth) => {
      updateProfile(userAuth.user, {
        displayName: name,
      })
        .then(
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
            }).catch((error) => {
              console.log("user not updated");
            })
          )
        )
        .catch((error) => {
          alert(error);
        });
    });
    routeToLogin();
  };

  const notify = () => toast.success("successfully logged in to site");

  return (
    <div className="login">
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
          type="text"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit" onClick={register}>
          Sign up
        </button>
        <Toaster position="top-center" reverseOrder={true} />
      </form>

      <p>
        Already a member?{" "}
        <Link  to="/signIn">
        <span className="login__register">
          Login Now
        </span>
        </Link>    
      </p>
    </div>
  );
};
