import { z } from "zod";

export const postSchema = z.object({
  title: z
    .string({
      required_error: "This field is required",
      invalid_type_error: "The field value must be a string",
    })
    .min(10, "The field value must be at least 10 characters long")
    .max(100, "The field value must be at most 100 characters long"),
  tags: z.array(z.string().uuid()).optional().default([]),
  tldr: z.string({
    required_error: "This field is required",
    invalid_type_error: "The field value must be a string",
  }),
  sourceUrl: z
    .string({
      required_error: "This field is required",
      invalid_type_error: "The field value must be a string",
    })
    .url("The field value must be a valid URL"),
});

export type CreatePostBody = z.infer<typeof postSchema>;
