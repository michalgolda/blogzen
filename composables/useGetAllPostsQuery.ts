import { useQuery } from "@tanstack/vue-query";

export const useGetAllPostsQuery = (searchQuery: string = "") => {
  const request = async () =>
    await $fetch(
      `/api/posts${searchQuery !== "" ? `?searchQuery=${searchQuery}` : ""}`
    );
  const query = useQuery({
    queryKey: ["posts"],
    queryFn: request,
  });

  return query;
};
