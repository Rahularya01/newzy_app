import { useQuery } from "@tanstack/react-query";
import * as SecureStore from "expo-secure-store";
import { http } from "~/lib/http";

export interface CustomerProfile {
  id: number;
  name: string;
  email: string;
  role: string;
  created_at: string;
  updated_at: string;
  profile_information: {
    id: number;
    customer: number;
    gender: string;
    interests: string;
    visa_type: string;
    notification: number;
    language: string;
    province: string;
    other_user_connect: number;
    premium_features: number;
    status: number;
    created_at: string;
    updated_at: string;
  };
}

export const useCustomerProfile = () => {
  return useQuery({
    queryKey: ["customerProfile"],
    queryFn: async () => {
      const token = await SecureStore.getItemAsync("authToken");

      if (!token) {
        throw new Error("No auth token found");
      }

      const { data } = await http.get<{
        status: string;
        data: CustomerProfile;
      }>("/Customer/Profile/Get", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data.data;
    },
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};
