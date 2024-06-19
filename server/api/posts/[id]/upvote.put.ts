import { prisma } from "@@/prisma/client";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  const post = await prisma.post.findUnique({
    where: {
      id,
    },
  });

  if (!post)
    throw createError({
      statusCode: 404,
      message: "Not found post by provided id",
    });

  await prisma.post.update({
    where: {
      id,
    },
    data: {
      upvotesCount: {
        increment: 1,
      },
    },
  });

  setResponseStatus(event, 200);

  return {
    message: "Post upvoted successfully",
  };
});
