import { useMutation } from "@tanstack/react-query";
import { http } from "~/lib/http";
import { objectToFormData } from "~/lib/utils";
import { APIResponse, MutationOptions } from "~/types/common";

export interface SignupPayload {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface SignupResponse {
  success: boolean;
  message: string;
  token?: string;
  errors?: Record<string, string[]>;
}

export const useSignup = (
  mutationOptions?: MutationOptions<APIResponse<SignupResponse>, SignupPayload>,
) => {
  return useMutation({
    ...mutationOptions,
    mutationFn: async (payload) => {
      try {
        const formData = objectToFormData(payload);
        const { data } = await http.post("/Register/Customer", formData);
        return data;
      } catch (error) {
        console.error(
          "Signup Error:",
          JSON.stringify(error.response?.data, null, 2),
        );
        throw error;
      }
    },
  });
};
