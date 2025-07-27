// src/services/account.service.js

// helper to pull the JWT from localStorage (or wherever you stored it)
function authHeader() {
  const token = JSON.parse(localStorage.getItem('user'))?.token;
  return token ? { Authorization: 'Bearer ' + token } : {};
}

export function getAccounts() {
  return fetch('http://localhost:8080/api/accounts', {
    headers: {
      ...authHeader(),
      'Content-Type': 'application/json'
    }
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch accounts');
    }
    return response.json();
  });
}
