import { getCookie } from "../Helpers/cookie";

const API_DOMAIN = "http://localhost:5000";

// Method get with Authorization header
export const get = async (url) => {
  const token = getCookie("token");
  console.log("Retrieved token:", token); // Debug log
  if (!token) {
    throw new Error("No token found. Please log in.");
  }
  const response = await fetch(`${API_DOMAIN}/${url}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

// Method post
export const post = async (url, data) => {
  const token = getCookie("token");
  const response = await fetch(`${API_DOMAIN}/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(
      `HTTP error! status: ${response.status}, message: ${errorMessage}`
    );
  }
  return response.json();
};

// Method put
export const put = async (url, data) => {
  const token = getCookie("token");
  const response = await fetch(`${API_DOMAIN}/${url}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const remove = async (url) => {
  const token = getCookie("token");
  const response = await fetch(`${API_DOMAIN}/${url}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};
