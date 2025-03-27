import { useMutation } from "@tanstack/react-query";
import { http } from "~/lib/http";
import { APIResponse, MutationOptions } from "~/types/common";

export interface VerifyOtpResponse {
  message: string;
  success: boolean;
}

export interface VerifyOtpRequest {
  email: string;
  code: string;
  type: "password_reset";
}

export const useVerifyOtp = (
  mutationOptions?: MutationOptions<
    APIResponse<VerifyOtpResponse>,
    VerifyOtpRequest
  >,
) => {
  return useMutation({
    ...mutationOptions,
    mutationFn: async (payload: VerifyOtpRequest) => {
      const { data } = await http.post("/Verify/Otp", payload);
      return data;
    },
  });
};
