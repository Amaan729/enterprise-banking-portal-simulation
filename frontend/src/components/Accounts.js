// src/components/Accounts.js
import React, { useEffect, useState } from 'react';
import { getAccounts } from '../services/account.service';

export default function Accounts() {
  const [accounts, setAccounts] = useState([]);
  const [error, setError]     = useState('');

  useEffect(() => {
    getAccounts()
      .then(data => setAccounts(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (accounts.length === 0) {
    return <div>No accounts found.</div>;
  }

  return (
    <div>
      <h2>Your Accounts</h2>
      <ul>
        {accounts.map(acc => (
          <li key={acc.id}>
            <strong>{acc.type}</strong>: ${acc.balance.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}
