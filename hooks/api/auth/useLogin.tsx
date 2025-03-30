import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as SecureStore from "expo-secure-store";
import { http } from "~/lib/http";
import { objectToFormData } from "~/lib/utils";
import { APIResponse, MutationOptions } from "~/types/common";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export const useLogin = (
  mutationOptions?: MutationOptions<APIResponse<LoginResponse>, LoginPayload>,
) => {
  const queryClient = useQueryClient();
  return useMutation({
    ...mutationOptions,
    mutationFn: async (payload) => {
      const formData = objectToFormData(payload);
      const { data } = await http.post("/login", formData);
      return data;
    },
    onSuccess: async (data) => {
      if (data.data.token) {
        await SecureStore.setItemAsync("authToken", data.data.token);
        queryClient.setQueryData(["authToken"], data.data.token);
      }
    },
  });
};
