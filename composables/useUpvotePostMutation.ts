import { useMutation } from "@tanstack/vue-query";

export const useUpvotePostMutation = () => {
  const request = async (id: string) =>
    await $fetch(`/api/posts/${id}/upvote`, { method: "PUT" });

  const mutation = useMutation({
    mutationKey: ["upvotePost"],
    mutationFn: (id: string) => request(id),
    onSuccess: () => push.success("Post upvoted successfully"),
    onError: () => push.error("Something went wrong, please try again"),
  });

  return mutation;
};
