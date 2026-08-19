import api from "./axios";

const getAuthConfig = () => {
  const token = localStorage.getItem("adminToken");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// Public
export const getFoods = async () => {
  const response = await api.get("/food");
  return response.data;
};

// Admin - Add Food
export const addFood = async (foodData) => {
  const response = await api.post("/food", foodData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

// Admin - Update Food
export const updateFood = async (id, foodData) => {
  const response = await api.put(
    `/food/${id}`,
    foodData,
    getAuthConfig()
  );

  return response.data;
};

// Admin - Delete Food
export const deleteFood = async (id) => {
  const response = await api.delete(
    `/food/${id}`,
    getAuthConfig()
  );

  return response.data;
};