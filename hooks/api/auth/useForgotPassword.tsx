import { useMutation } from "@tanstack/react-query";
import { http } from "~/lib/http";
import { objectToFormData } from "~/lib/utils";
import { MutationOptions } from "~/types/common";

export interface ForgotPasswordPayload {
  email: string;
}

export interface ForgotPasswordResponse {
  Status: string;
}

export const useForgotPassword = (
  mutationOptions?: MutationOptions<
    ForgotPasswordResponse,
    ForgotPasswordPayload
  >,
) => {
  return useMutation({
    ...mutationOptions,
    mutationFn: async (payload) => {
      const formData = objectToFormData(payload);
      const { data } = await http.post("/Forget/Password", formData);
      return data;
    },
  });
};
