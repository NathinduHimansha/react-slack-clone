import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useStateValues } from "../context-api/StateProvider";
import { actionTypes } from "../context-api/reducer";

function Login() {
  const [state, dispatch] = useStateValues();
  //auth
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        //setting up data layer values
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login_container">
        <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="" />
        <h1>Sign in to Zero-One Communication Platform</h1>
        <p>on slack clone made by Nathindu Himansha</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
