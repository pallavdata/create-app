import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import rocket from "./rocket.png";
import { useUserAuth } from "../context/UserAuthContext";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { changePassword } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await changePassword(email);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="custom-container rounded-4">
      <img className="rounded-4" src={rocket} alt="rocket" />
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

          <div className="d-flex justify-content-between mt-3 mb-3">
            <Link to="/">Login Instead</Link>
            <Link to="/SignUp">Sign Up Instead</Link>
          </div>

          <button type="submit" className="sign-btn p-2 w-100 btn">
            Send Reset Email
          </button>
        </form>
      </div>
    </div>
  );
};
export default Reset;