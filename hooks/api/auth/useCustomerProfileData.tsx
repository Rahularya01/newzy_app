import { useMutation } from "@tanstack/react-query";
import * as SecureStore from "expo-secure-store";
import { http } from "~/lib/http";
import { objectToFormData } from "~/lib/utils";
import { APIResponse, MutationOptions } from "~/types/common";

export interface CustomerProfilePayload {
  gender: string;
  interests: string;
  visa_type: string;
  notification: number;
  language: string;
  province: string;
  other_user_connect: number;
  premium_features: number;
}

export interface CustomerProfileResponse {
  Status: string;
}

export const useCustomerProfileData = (
  mutationOptions?: MutationOptions<
    APIResponse<CustomerProfileResponse>,
    CustomerProfilePayload
  >,
) => {
  return useMutation({
    ...mutationOptions,
    mutationFn: async (payload) => {
      const token = await SecureStore.getItemAsync("authToken");

      if (!token) {
        throw new Error("No auth token found");
      }

      const formData = objectToFormData(payload);
      const { data } = await http.post("/Customer/Profile", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    },
  });
};
