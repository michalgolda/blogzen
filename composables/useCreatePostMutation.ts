import { push } from "notivue";
import { useMutation } from "@tanstack/vue-query";
import type { CreatePostBody } from "~/validation/post.schema";

export const useCreatePostMutation = () => {
  const request = async (body: CreatePostBody) =>
    await $fetch("/api/posts", {
      method: "POST",
      body,
    });

  const mutation = useMutation({
    mutationKey: ["createPost"],
    mutationFn: request,
    onSuccess: () => push.success("Post created successfully"),
    onError: () => push.error("Something went wrong, please try again"),
  });

  return mutation;
};
