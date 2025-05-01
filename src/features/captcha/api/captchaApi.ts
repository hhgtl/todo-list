import { baseApi } from "@/app/baseApi"

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCaptcha: build.query<{ url: string }, void>({
      query: () => "/security/get-captcha-url",
    }),
  }),
})

export const { useGetCaptchaQuery } = authApi
