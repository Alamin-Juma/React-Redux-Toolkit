import React, { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase.utils";

import { useDispatch } from "react-redux";
import { login } from "../../features/users/userSlice";

import './Login.css'

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!name) alert("Please enter a name");

    createAuthUserWithEmailAndPassword(email, password).then((userAuth) => {
      updateProfile(userAuth.user, {
        displayName: name,
        photoUrl: profilePic,
      }).then(
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoUrl: profilePic,
          })
          .catch((error) => {
              console.log('user not updated');
          })
        )
      )
      .catch((error) => {
          alert(error)
      })
    });
  };


  const loginToApp = (event) => {
    event.preventDefault();

    signInAuthUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        //   store user info in redux store using dispatch
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <img src="Linkedin_Logo_text.svg" alt="" />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
          type="text"
        />

        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile picture URL (optional)"
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
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

