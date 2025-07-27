import React, { useState } from "react";
import { register } from "../services/auth.service";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    register(username, password)
      .then(() => navigate("/login"))
      .catch(() => setError("Registration failed"));
  }

  return (
    <div>
      <h2>Register</h2>
      {error && <p style={{color:"red"}}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: <input value={username} onChange={e=>setUsername(e.target.value)} /></label>
        </div>
        <div>
          <label>Password: <input type="password" value={password} onChange={e=>setPassword(e.target.value)} /></label>
        </div>
        <button type="submit">Register</button>
      </form>
      <p>Have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}
