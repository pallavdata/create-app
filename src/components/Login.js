import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "./google.svg";

const Login = () => {
  return (
    <div className="custom-container rounded-4">
      <img
        className="rounded-4"
        src="https://i.ibb.co/QpWDj5r/rocket.png"
        alt="rocket"
      />
      <div className="p-4">
        <div className="c-blue text-center">
          <b>Welcome to Bardeen</b>
        </div>
        <form>
          <div className="text-center mt-1 mb-4">
            Let's log in to lounch your automations.
          </div>
          <input
            className="form-control p-2 ps-4 mt-1 mb-1"
            placeholder="Email Address"
          ></input>
          <input
            className="form-control p-2 ps-4 mt-1 mb-1"
            placeholder="Password"
          ></input>
          <div className="d-flex justify-content-between mt-3 mb-3">
            <Link to="/SignUp">Create Account</Link>
            <a href="#">Forgot Password?</a>
          </div>
          <button className="sign-btn p-2 w-100 btn">Sign in</button>

          <button className=" border p-0 mt-4 w-100 justify-content-between d-flex btn">
            <div>
              <img src={logo} className=" App-logo" alt="logo" />
              Sign in with Google
            </div>
            <div className="me-3">
              <i className="bi bi-arrow-right"></i>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
