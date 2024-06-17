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
      :redirect-code="redirectCode"
    />
  </div>
</template>
<script setup lang="ts">
import type { Post } from "@@/main";

type PostCardProps = Omit<Post, "id" | "updatedAt" | "sourceUrl">;

const props = defineProps<PostCardProps>();
</script>
