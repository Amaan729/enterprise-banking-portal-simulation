import React, { useState } from "react";
import { login } from "../services/auth.service";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]     = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    login(username, password)
      .then(() => navigate("/accounts"))
      .catch(() => setError("Login failed"));
  }

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{color:"red"}}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: <input value={username} onChange={e=>setUsername(e.target.value)} /></label>
        </div>
        <div>
          <label>Password: <input type="password" value={password} onChange={e=>setPassword(e.target.value)} /></label>
        </div>
        <button type="submit">Login</button>
      </form>
      <p>New? <Link to="/register">Register</Link></p>
    </div>
  );
}
