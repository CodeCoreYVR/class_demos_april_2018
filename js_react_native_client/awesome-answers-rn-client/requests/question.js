const DOMAIN_URL = "http://075cc74d.ngrok.io/";
const API_PATH = "api/v1";
const BASE_URL = `${DOMAIN_URL}/${API_PATH}`;

export default {
  all() {
    return fetch(`${BASE_URL}/questions`, {
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    }).then(response => response.json());
  },
  one(id) {
    return fetch(`${BASE_URL}/questions/${id}`, {
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    }).then(response => response.json());
  },
  create(params) {
    return fetch(`${BASE_URL}/questions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(params)
    }).then(response => response.json());
  }
};
