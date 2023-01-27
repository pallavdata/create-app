import React from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Nav = () => {
  const { logOut } = useUserAuth();
  return (
    <>
      <nav className="navbar bg-dark navbar-dark ">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/home">News React</Link>
          <div onClick={logOut}>
            <Link to="/">Logout</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
