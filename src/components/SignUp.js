import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Login.css";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const formSubmit = async (e) => {
    e.preventDefault();
    try{
        await signUp(email, password);
    }
    catch(err){
        setError(err.message);

    }
  };
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
        <form onSubmit={formSubmit}>
          <div className="text-center mt-1 mb-4">
            Let's log in to lounch your automations.
          </div>
          <div className="bg-warning p-2">{error}</div>
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
          <div className="mt-3 mb-3">
            <Link to="/">Login Instead</Link>
          </div>
          <button type="submit" className="sign-btn p-2 w-100 btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};
export default Signup;
