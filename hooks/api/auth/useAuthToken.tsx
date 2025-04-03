import { useQuery } from "@tanstack/react-query";
import * as SecureStore from "expo-secure-store";

export const useAuthToken = () => {
  return useQuery({
    queryKey: ["authToken"],
    queryFn: async () => {
      return await SecureStore.getItemAsync("authToken");
    },
    staleTime: Infinity,
  });
};
