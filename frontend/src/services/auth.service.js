import API from "./api";

export function login(username, password) {
  return API.post("/api/auth/login", { username, password })
            .then(res => {
              localStorage.setItem("token", res.data.token);
              return res.data;
            });
}

export function register(username, password) {
  return API.post("/api/auth/register", { username, password });
}
