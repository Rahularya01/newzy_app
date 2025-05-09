import { UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

export interface APIResponse<T> {
  success: boolean;
  data: T;
  message: string;
  errors?: any;
}

export interface QueryOptions<T, K>
  extends UseQueryOptions<
    T,
    AxiosError<APIResponse<any>>,
    T,
    // @ts-ignore
    K
  > {}

export interface MutationOptions<T, P>
  extends UseMutationOptions<T, AxiosError<APIResponse<any>>, P> {}
