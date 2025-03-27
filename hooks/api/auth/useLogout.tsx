import { useMutation } from "@tanstack/react-query";
import { http } from "~/lib/http";
import { APIResponse, MutationOptions } from "~/types/common";

export interface LogoutResponse {
  message: string;
  //consider message : User Logged out succesful
}

export const useLogout = (
  mutationOptions?: MutationOptions<APIResponse<LogoutResponse>, void>,
) => {
  return useMutation({
    ...mutationOptions,
    mutationFn: async () => {
      const { data } = await http.post("/Logout");
      return data;
    },
  });
};
