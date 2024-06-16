import { prisma } from "@@/prisma/client";
import { postSchema } from "@@/validation/post.schema";
import type { CreatePostBody } from "@@/validation/post.schema";
import { withBodyValidation } from "@@/server/withBodyValidation";

export default withBodyValidation(
  defineEventHandler(async (event) => {
    const body = await readBody<CreatePostBody>(event);

    const existingTags = await prisma.tag.findMany({
      select: { id: true },
      where: {
        id: {
          in: body.tags,
        },
      },
    });

    const post = await prisma.post.create({
      data: {
        title: body.title,
        tldr: body.tldr,
        resourceUrl: body.resourceUrl,
        thumbnailUrl: "/thumbnail.webp",
        tags: {
          connect: existingTags,
        },
      },
    });

    return post;
  }),
  postSchema
);
