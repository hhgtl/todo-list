import { z } from "zod"

export const loginSchema = z
  .object({
    email: z.string().min(1, { message: "Email is required" }).email({ message: "Incorrect email address" }),
    password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(3, { message: "Password must be at least 3 characters long" }),
    rememberMe: z.boolean(),
    // captcha: z.string().min(1, { message: "Captcha is required" }),
    captcha: z.string().optional(),
    needCaptcha: z.boolean(),
  })
  .refine(
    (data) => {
      if (data.needCaptcha) {
        return data.captcha && data.captcha.trim() !== ""
      }
      return true
    },
    {
      message: "Captcha is required",
      path: ["captcha"],
    },
  )

export type Inputs = z.infer<typeof loginSchema>
