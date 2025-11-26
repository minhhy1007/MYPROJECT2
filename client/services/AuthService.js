// AceEnglish/client/services/AuthService.js

const API_BASE_URL = "http://localhost/aceenglish_backend/api/auth";

const handleRequest = async (endpoint, payload) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      return data;
    } else {
      // Xử lý lỗi trả về từ PHP
      throw new Error(data.message || "Lỗi không xác định từ máy chủ.");
    }
  } catch (error) {
    console.error(`Lỗi API ${endpoint}:`, error);
    throw error;
  }
};

export const AuthService = {
  login: (email, password) => {
    return handleRequest("login", { email, password });
  },

  register: (email, password) => {
    return handleRequest("register", { email, password });
  },

  saveToken: (token) => {
    localStorage.setItem("authToken", token);
  },

  getToken: () => {
    return localStorage.getItem("authToken");
  },
};
