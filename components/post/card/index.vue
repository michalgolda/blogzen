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
      :id="id"
      :upvotesCount="upvotesCount"
      :viewsCount="viewsCount"
      :redirect-code="redirectCode"
    />
  </div>
</template>
<script setup lang="ts">
import type { Post } from "@@/client";

type PostCardProps = Omit<Post, "updatedAt" | "sourceUrl">;

const props = defineProps<PostCardProps>();
</script>
