import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as SecureStore from "expo-secure-store";
import { http } from "~/lib/http";
import { APIResponse, MutationOptions } from "~/types/common";

export interface LogoutResponse {
  message: string;
  //consider message : User Logged out succesful
}

export const useLogout = (
  mutationOptions?: MutationOptions<APIResponse<LogoutResponse>, void>,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    ...mutationOptions,
    mutationFn: async () => {
      const { data } = await http.post("/Logout");
      await SecureStore.deleteItemAsync("authToken"); // Remove token from Secure Store
      queryClient.setQueryData(["authToken"], null);
      return data;
    },
  });
};
