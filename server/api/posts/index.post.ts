import { prisma } from "@@/prisma/client";
import { postSchema } from "@@/validation/post.schema";
import type { CreatePostBody } from "@@/validation/post.schema";
import { withBodyValidation } from "@@/server/utils/validation/withBodyValidation";
import { generateRedirectCode } from "@@/utils/redirectCode";

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

    const sourceUrl = body.sourceUrl;
    const createdAt = new Date();
    const redirectCode = generateRedirectCode(sourceUrl, createdAt);

    const post = await prisma.post.create({
      data: {
        title: body.title,
        tldr: body.tldr,
        thumbnailUrl: body.thumbnailUrl,
        tags: {
          connect: existingTags,
        },
        createdAt,
        redirectCode,
        sourceUrl,
      },
    });

    return post;
  }),
  postSchema
);
