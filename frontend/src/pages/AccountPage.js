import React, { useState, useEffect } from "react";
import API from "../services/api";

export default function AccountPage() {
  const [accounts, setAccounts] = useState([]);
  const [type, setType]         = useState("Checking");
  const [initial, setInitial]   = useState("");
  const [error, setError]       = useState("");

  useEffect(() => {
    API.get("/api/accounts")
       .then(res => setAccounts(res.data))
       .catch(() => setError("Failed to load accounts"));
  }, []);

  function handleCreate(e) {
    e.preventDefault();
    API.post("/api/accounts", null, {
      params: { type, initialDeposit: initial }
    })
      .then(res => {
        setAccounts([...accounts, res.data]);
        setInitial("");
      })
      .catch(() => setError("Failed to create account"));
  }

  return (
    <div>
      <h2>Your Accounts</h2>
      {error && <p style={{color:"red"}}>{error}</p>}
      {accounts.length === 0
        ? <p>No accounts found.</p>
        : <ul>{accounts.map(a => (
            <li key={a.id}>{a.type}: ${a.balance}</li>
          ))}</ul>
      }
      <h3>Open New Account</h3>
      <form onSubmit={handleCreate}>
        <label>
          Type:
          <select value={type} onChange={e=>setType(e.target.value)}>
            <option>Checking</option>
            <option>Savings</option>
          </select>
        </label>
        <label>
          Initial Deposit:
          <input value={initial} onChange={e=>setInitial(e.target.value)} />
        </label>
        <button type="submit">Open Account</button>
      </form>
    </div>
  );
}
