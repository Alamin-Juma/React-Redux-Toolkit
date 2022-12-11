import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase.utils";

import { useDispatch } from "react-redux";
import { login } from "../../features/users/userSlice";

import "./Login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!name) alert("Please enter a name");

    createAuthUserWithEmailAndPassword(email, password).then((userAuth) => {
      updateProfile(userAuth.user, {
        displayName: name,
        photoUrl: profilePic,
      })
        .then(
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
            })
            .catch((error) => {
              console.log("user not updated");
            })
          )
        )
        .catch((error) => {
          alert(error);
        });
    });
     routeToHome()

  };

  const navigate = useNavigate();
  const routeToHome = () => {
    navigate("/shop");
  };

  const notify = () => toast.success('successfully logged in to site');

  const loginToApp = (event) => {
    event.preventDefault();
    toast.loading('Redirecting...')

    signInAuthUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        //   store user info in redux store using dispatch
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
      })
      .then(() => notify())
      .then(() => routeToHome())
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <img src="Linkedin_Logo_text.svg" alt="" />
      <form>
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
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
        <Toaster position="top-center" 
                reverseOrder={true} />
      </form>

      <p>
        Not a member?{" "}
        <Link  to="/signup">
        <span className="login__register">
          Register Now
        </span>
        </Link>    
      </p>
    </div>
  );
};
