import api from "./axios";

export const getFoods = async () => {
  const response = await api.get("/food");
  return response.data;
};