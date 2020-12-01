import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
    const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
          dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
      });
    })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://i.pinimg.com/originals/3f/83/26/3f8326ae92489327dc278963d362d5d4.png"
          alt=""
        ></img>
        <div className="login_text">
          <h1>Sign in to ChatNow</h1>
        </div>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
