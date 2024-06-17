import { prisma } from "@@/prisma/client";

export default defineEventHandler(async (event) => {
  const posts = await prisma.post.findMany({
    include: {
      tags: true,
    },
  });
  return posts;
});
