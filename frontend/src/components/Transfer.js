// frontend/src/components/Transfer.js
import React, { useState } from 'react';
import API from '../services/api';

export default function Transfer() {
  const [from, setFrom] = useState('');
  const [to, setTo]     = useState('');
  const [amount, setAmt] = useState('');
  const [msg, setMsg] = useState('');

  const submit = e => {
    e.preventDefault();
    API.post('/api/transactions/transfer', {
      fromAccountId: Number(from),
      toAccountId: Number(to),
      amount: Number(amount)
    })
    .then(() => setMsg('Transfer successful'))
    .catch(() => setMsg('Transfer failed'));
  };

  return (
    <div>
      <h2>Transfer Funds</h2>
      {msg && <p>{msg}</p>}
      <form onSubmit={submit}>
        <input placeholder="From Account ID" value={from} onChange={e=>setFrom(e.target.value)} /><br/>
        <input placeholder="To Account ID" value={to} onChange={e=>setTo(e.target.value)} /><br/>
        <input placeholder="Amount" type="number" step="0.01" value={amount} onChange={e=>setAmt(e.target.value)} /><br/>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}