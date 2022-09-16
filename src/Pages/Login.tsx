import React from "react";
import "../style/login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <div className="input-container">
        <div className="box-auth">
          <h1 className="login-title">Sign in</h1>
          <div className="input-field">
            <input
              className="input-login input-auth "
              placeholder="EMAIL or ID"
              type="text"
            ></input>
          </div>
          <div className="input-field">
            <input className="input-login" placeholder="PASSWORD"></input>
          </div>
          <div>
            <div>...</div>
          </div>
          <div className="password-word">
            <p>I forgot the password</p>
          </div>
          <div>
            <button className="authenticate-button">Authenticate</button>
          </div>
          <div className="account-create-field">
            <p>Do not have an account yet?</p>
            <p>Create a new one</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
