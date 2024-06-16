<template>
  <div class="card p-4 shadow-none border w-full bg-base-100">
    <PostCardThumbnail :src="thumbnailUrl" :alt="title" />
    <PostCardBody
      :createdAt="createdAt"
      :title="title"
      :tldr="tldr"
      :tags="tags"
    />
    <PostCardMeta
      :upvotesCount="upvotesCount"
      :viewsCount="viewsCount"
      :resourceUrl="resourceUrl"
    />
  </div>
</template>
<script setup lang="ts">
import type { Post, Tag } from "@@/main";

type PostCardProps = Omit<Post, "id" | "updatedAt"> & {
  tags: Tag[];
};

const props = defineProps<PostCardProps>();
</script>
