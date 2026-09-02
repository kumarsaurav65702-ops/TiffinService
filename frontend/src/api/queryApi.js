import api from "./axios";

// Public - Submit Customer Query
export const submitQuery = async (queryData) => {
  const response = await api.post("/query", queryData);
  return response.data;
};

// Admin - Get All Queries
export const getQueries = async () => {
  const token = localStorage.getItem("adminToken");

  const response = await api.get("/query", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// Admin - Update Query Status
export const updateQueryStatus = async (id, status) => {
  const token = localStorage.getItem("adminToken");

  const response = await api.put(
    `/query/${id}`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};