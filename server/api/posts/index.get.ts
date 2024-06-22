import { prisma } from "@@/prisma/client";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const searchQuery = query.searchQuery;

  const posts = await prisma.post.findMany({
    where: {
      ...(searchQuery
        ? {
            OR: [
              {
                title: { contains: searchQuery as string, mode: "insensitive" },
              },
              {
                tldr: { contains: searchQuery as string, mode: "insensitive" },
              },
            ],
          }
        : {}),
    },
    include: {
      tags: true,
    },
  });
  return posts;
});
