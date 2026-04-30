import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL || "http://localhost:3002"}/auth/login`, {
        email,
        password,
      });
      console.log("Response from server:", response.data);
      if (response.data.success === true) {
        localStorage.setItem("token", response.data.token);
        console.log("Login successful! Redirecting to dashboard...");
        window.location.href = `${process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3003"}/?token=${response.data.token}`;
      } else {
        alert("Login failed: " + response.data.message);
      }
    } catch (err) {
      alert("Error: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="container p-5">
      <div className="row justify-content-center">
        <div className="col-4 border p-4 shadow-sm">
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
          <p className="mt-3 text-center">
            New user? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
