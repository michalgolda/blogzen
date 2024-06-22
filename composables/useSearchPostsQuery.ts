import { useQuery, useQueryClient } from "@tanstack/vue-query";

export const useSearchPostsQuery = () => {
  const queryClient = useQueryClient();
  const searchQuery = ref("");

  const query = useQuery({
    queryKey: ["filteredPosts"],
    queryFn: () => $fetch(`/api/posts?searchQuery=${searchQuery.value}`),
  });

  watch(searchQuery, () => {
    query.refetch();
    query.isSuccess && queryClient.setQueryData(["posts"], query.data);
  });

  return {
    ...query,
    searchQuery,
  };
};
