<template>
  <PostList :data="data" />
</template>
<script setup lang="ts">
import { prisma } from "@@/prisma/client";

const { data } = await useLazyAsyncData(
  "posts",
  async () =>
    await prisma.post.findMany({
      include: {
        tags: {
          select: {
            name: true,
          },
        },
      },
    })
);
</script>
