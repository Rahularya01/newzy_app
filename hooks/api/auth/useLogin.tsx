import { useMutation } from "@tanstack/react-query";
import { http } from "~/lib/http";
import { objectToFormData } from "~/lib/utils";
import { MutationOptions } from "~/types/common";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export const useLogin = (
  mutationOptions?: MutationOptions<LoginResponse, LoginPayload>,
) => {
  return useMutation({
    ...mutationOptions,
    mutationFn: async (payload) => {
      const formData = objectToFormData(payload);
      const { data } = await http.post("/login", formData);
      return data;
    },
  });
};
