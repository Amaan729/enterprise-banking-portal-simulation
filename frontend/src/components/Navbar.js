// frontend/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { token, logout } = useAuth();
  return (
    <nav style={{ padding: 10, background: '#eee' }}>
      <Link to="/accounts">Accounts</Link> |&nbsp;
      <Link to="/transfer">Transfer</Link> |&nbsp;
      {token ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}