import { useMutation } from "@tanstack/react-query";
import { http } from "~/lib/http";
import { objectToFormData } from "~/lib/utils";
import { APIResponse, MutationOptions } from "~/types/common";

export interface VerifyAccountOtpResponse {
  message: string;
  success: boolean;
}

export interface VerifyAccountOtpRequest {
  email: string;
  code: string;
  type: "email_verification";
}

export const useVerifyAccountOtp = (
  mutationOptions?: MutationOptions<
    APIResponse<VerifyAccountOtpResponse>,
    VerifyAccountOtpRequest
  >,
) => {
  return useMutation({
    ...mutationOptions,
    mutationFn: async (payload: VerifyAccountOtpRequest) => {
      const formData = objectToFormData(payload);
      const { data } = await http.post("/Account/Verification", formData);
      return data;
    },
  });
};
