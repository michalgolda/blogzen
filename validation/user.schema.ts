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

export type SignInBody = z.infer<typeof signInSchema>;
