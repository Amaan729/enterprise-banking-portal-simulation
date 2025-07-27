// frontend/src/components/Transactions.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/api';

export default function Transactions() {
  const { accountId } = useParams();
  const [txns, setTxns] = useState([]);

  useEffect(() => {
    API.get(`/api/transactions/${accountId}`)
       .then(res => setTxns(res.data))
       .catch(console.error);
  }, [accountId]);

  return (
    <div>
      <h2>Transactions for Account #{accountId}</h2>
      <table border="1" cellPadding="6">
        <thead>
          <tr><th>Type</th><th>Amount</th><th>Time</th></tr>
        </thead>
        <tbody>
          {txns.map(t => (
            <tr key={t.id}>
              <td>{t.type}</td>
              <td>${t.amount.toFixed(2)}</td>
              <td>{new Date(t.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}