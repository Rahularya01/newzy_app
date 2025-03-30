import { useMutation } from "@tanstack/react-query";
import { http } from "~/lib/http";
import { objectToFormData } from "~/lib/utils";
import { APIResponse, MutationOptions } from "~/types/common";

interface ResetPasswordRequest {
  email: string;
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
    mutationFn: async (payload) => {
      const formData = objectToFormData(payload);
      const { data } = await http.post("/Change/Password", formData);
      return data;
    },
  });
};
