import api from "./axios";

export const adminLogin = async (credentials) => {
  const response = await api.post("/admin/login", credentials);
  return response.data;
};