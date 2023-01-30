import "../App.scss";
import React from "react";
const Login = () => {
  return (
    <>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">ChatApp</span>
          <span className="title">Log in</span>
          <from className='form'>
            <input className="input" type="email" placeholder="Email"/>
            <input className="input" type="Password" placeholder="Password"/>
            <button className="button">Sign in</button>
          </from>
          <p>you don't have an account? Create Account</p>
        </div>
      </div>
    </>
  );
};

export default Login;
