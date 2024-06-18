import { useQuery } from "@tanstack/vue-query";

export const useGetAllTagsQuery = () => {
  const request = async () => await $fetch("/api/tags");
  const mutation = useQuery({
    queryKey: ["tags"],
    queryFn: request,
  });

  return mutation;
};
