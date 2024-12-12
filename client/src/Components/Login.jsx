import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; // Import js-cookie
import { useDispatch } from "react-redux";
import { setToken } from "../store/TokenSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const dispatch =  useDispatch()
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setError(""); 
    setSuccess(""); 

    try {
      const response = await axios.post("http://localhost:4500/api/admin/login", {
        email,
        password,
      });

      if (response.data && response.data.success) {
      
        navigate("/dashboard");
 
        setSuccess("Login successful!");
        dispatch(setToken(response.data.token));
        
    
      } else {
        setError(response.data.message || "Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Login failed!");
    }
  };

  return (
    <div className="container p-5">
      <Link to={"/"} className="nav-link">Back to Home</Link>
      <div className="row justify-content-center mt-5">
        <h1 className="fs-1 text-center my-5">Login Form For Admin</h1>
        <div className="col-lg-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>

          {/* Success/Error Messages */}
          {success && <div className="alert alert-success mt-3">{success}</div>}
          {error && <div className="alert alert-danger mt-3">{error}</div>}
        </div>
      </div>
    </div>
  );
}

export default Login;
