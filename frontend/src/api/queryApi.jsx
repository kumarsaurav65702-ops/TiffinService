import api from "./axios";

export const submitQuery = async (queryData) => {
  const response = await api.post("/query", queryData);
  return response.data;
};