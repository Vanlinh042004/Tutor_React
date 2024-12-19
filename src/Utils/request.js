const API_DOMAIN = "http://localhost:5000";
// Method get
export const get = async (url) => {
  const response = await fetch(`${API_DOMAIN}/${url}`);
  return response.json();
};
// Method post
export const post = async (url, data) => {
  const response = await fetch(`${API_DOMAIN}/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
  const response = await fetch(`${API_DOMAIN}/${url}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
export const remove = async (url) => {
  const response = await fetch(`${API_DOMAIN}/${url}`, {
    method: "DELETE",
  });
  return response.json();
};
