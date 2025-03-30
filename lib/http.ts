import axios from "axios";
import * as SecureStore from "expo-secure-store";

const http = axios.create({
  baseURL: "https://newzy.ca/api",
});

http.interceptors.request.use(
  async (config) => {
    try {
      const token = await SecureStore.getItemAsync("authToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Error retrieving token:", error);
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export { http };
