<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8"
  >
    <PostCard
      v-for="(post, index) in data"
      :key="index"
      :title="post.title"
      :tldr="post.tldr"
      :created-at="post.createdAt"
      :thumbnail-url="post.thumbnailUrl"
      :resource-url="post.resourceUrl"
      :upvotes-count="post.upvotesCount"
      :views-count="post.viewsCount"
      :tags="post.tags"
    />
  </div>
</template>
<script lang="ts" setup>
import type { Post } from "@@/main";

export interface PostListProps {
  data: Post[];
}

const props = defineProps<PostListProps>();
</script>
