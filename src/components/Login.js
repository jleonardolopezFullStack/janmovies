import React from "react";
import "../styles/login.css";
import FormLogin from "./FormLogin";

const Login = () => {
  return (
    <div className="welcome_title">
      <div className="title">
        <h1>Good to see you again !</h1>
      </div>

      <div className="container_login">
        <div className="card border-primary mb-3 login">
          <div className="card-header">Just Admin could get Login session</div>
          <div className="card-body">
            <FormLogin />
          </div>
          <div className="register-button">
            <a className="card-header" href="/">
              Don't have an account ?
            </a>
            <a className="card-header" href="/">
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
