import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "./Login.css";
import logo from "./google.svg";
import git from "./git.svg";
import rocket from "./rocket.png";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn, googleSignIn, gitSignIn } = useUserAuth();
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      try {
        await logIn(email, password);
        navigate("/home");
      } catch (err) {
        setError(err.message);
      }
    };
  
    const handleGoogleSignIn = async (e) => {
      e.preventDefault();
      try {
        await googleSignIn();
        navigate("/home");
      } catch (error) {
        console.log(error.message);
      }
    };
    const handleGitSignIn = async (e) => {
      e.preventDefault();
      try {
        await gitSignIn();
        navigate("/home");
      } catch (error) {
        console.log(error.message);
      }
    };
  return (
    <div className="custom-container rounded-4">
      <img
        className="rounded-4"
        src={rocket}
        alt="rocket"
      />
      <div className="p-4">
        <div className="c-blue text-center">
          <b>Welcome to Bardeen</b>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="text-center mt-1 mb-4">
            Let's log in to lounch your automations.
          </div>
          {error && <div variant="bg-info">{error}</div>}
          <input
            className="form-control p-2 ps-4 mt-1 mb-1"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            className="form-control p-2 ps-4 mt-1 mb-1"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <div className="d-flex justify-content-between mt-3 mb-3">
            <Link to="/SignUp">Create Account</Link>
            <Link to="/Forget">Forgot Password?</Link>
          </div>
          <button className="sign-btn p-2 w-100 btn">Sign in</button>

          <button className=" border p-0 mt-4 w-100 justify-content-between d-flex btn">
            <div onClick={handleGoogleSignIn}>
              <img src={logo} className=" App-logo" alt="logo" />
              Sign in with Google
            </div>
            <div className="me-3">
              <i className="bi bi-arrow-right"></i>
            </div>
          </button>

          <button className=" border p-0 mt-2 w-100 justify-content-between d-flex btn">
            <div  onClick={handleGitSignIn}>
              <img src={git} className="svg-logo p-2" alt="gitlogo" />
              Sign in with Github
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