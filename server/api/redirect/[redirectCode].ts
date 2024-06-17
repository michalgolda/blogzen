import { getRouterParam, sendRedirect } from "h3";
import { prisma } from "@@/prisma/client";

export default defineEventHandler(async (event) => {
  const redirectCode = getRouterParam(event, "redirectCode");

  const post = await prisma.post.findUnique({
    where: {
      redirectCode,
    },
  });

  if (!post) {
    throw createError({
      statusCode: 404,
      message: "Not found source by provided redirect code",
    });
  }

  await prisma.post.update({
    where: {
      redirectCode,
    },
    data: {
      viewsCount: {
        increment: 1,
      },
    },
  });

  return sendRedirect(event, post.sourceUrl, 301);
});
