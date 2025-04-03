import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { GalleryThumbnails } from "lucide-react-native";

const http = axios.create({
  baseURL: "https://newzy.ca/api",
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials only if your server sets cookies across domains
  // withCredentials: true,
});

http.interceptors.request.use(
  async (config) => {
    try {
      const token = await SecureStore.getItemAsync("authToken");
      console.log("📦 Token:", token);
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
