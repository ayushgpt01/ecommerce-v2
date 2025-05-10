import { z } from "zod";

export const signUpSchema = z
  .object({
    displayName: z.string().min(1, "Display name is required"),
    email: z.string().email("Invalid email"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const signInSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
export type SignInSchema = z.infer<typeof signInSchema>;
