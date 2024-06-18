import { useQuery } from "@tanstack/vue-query";

export const useGetAllPostsQuery = () => {
  const request = async () => await $fetch("/api/posts");
  const mutation = useQuery({
    queryKey: ["posts"],
    queryFn: request,
  });

  return mutation;
};
