import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Reset from "./components/Reset";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

class App extends Component {
  render() {
    return (
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}/>
          <Route path="/Login/" element={<Login /> } />
          <Route path="/signup/" element={<SignUp />} />
          <Route path="/Forget/" element={<Reset />} />
        </Routes>
      </UserAuthContextProvider>
    );
  }
}
export default App;
