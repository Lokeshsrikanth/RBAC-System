
// Save token
export const saveToken = (token) => {
  localStorage.setItem("token", token);
};

// Get token
export const getToken = () => {
  return localStorage.getItem("token");
};

// Remove token
export const removeToken = () => {
  localStorage.removeItem("token");
};

// Save user object
export const saveUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

// Get user object
export const getUser = () => {
  const stored = localStorage.getItem("user");
  return stored ? JSON.parse(stored) : null;
};

// Remove user
export const removeUser = () => {
  localStorage.removeItem("user");
};
