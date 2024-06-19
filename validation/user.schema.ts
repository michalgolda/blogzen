import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string({
      required_error: "This field is required",
      invalid_type_error: "The field value must be a string",
    })
    .email(),
  password: z.string({
    required_error: "This field is required",
    invalid_type_error: "The field value must be a string",
  }),
});

export const signUpSchema = z
  .object({
    email: z
      .string({
        required_error: "This field is required",
        invalid_type_error: "The field value must be a string",
      })
      .email(),
    password: z.string({
      required_error: "This field is required",
      invalid_type_error: "The field value must be a string",
    }),
    confirmPassword: z.string({
      required_error: "This field is required",
      invalid_type_error: "The field value must be a string",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type SignInBody = z.infer<typeof signInSchema>;
export type SignUpBody = z.infer<typeof signUpSchema>;
