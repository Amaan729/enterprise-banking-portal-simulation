// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login       from './components/Login';
import Register    from './components/Register';
import Accounts    from './components/Accounts';
import Transactions from './components/Transactions';
import Transfer    from './components/Transfer';
import Navbar      from './components/Navbar';
import { AuthProvider, useAuth } from './context/AuthContext';

function RequireAuth({ children }) {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/accounts" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/accounts" element={
            <RequireAuth><Accounts /></RequireAuth>} />
          <Route path="/transfer" element={
            <RequireAuth><Transfer /></RequireAuth>} />
          <Route path="/transactions/:accountId" element={
            <RequireAuth><Transactions /></RequireAuth>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;