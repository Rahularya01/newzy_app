import { useMutation } from "@tanstack/react-query";
import { http } from "~/lib/http";
import { APIResponse, MutationOptions } from "~/types/common";

interface ResetPasswordRequest {
  password: string;
  password_confirmation: string;
}

interface ResetPasswordResponse {
  message: string;
}

export const useResetPassword = (
  mutationOptions?: MutationOptions<
    APIResponse<ResetPasswordResponse>,
    ResetPasswordRequest
  >,
) => {
  return useMutation({
    ...mutationOptions,
    mutationFn: async (data: ResetPasswordRequest) => {
      const response = await http.post("/Change/Password", data);
      return response.data;
    },
  });
};
