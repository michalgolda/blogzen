<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
  >
    <PostCard
      v-for="(post, index) in data"
      :key="index"
      :title="post.title"
      :tldr="post.tldr"
      :created-at="post.createdAt"
      :thumbnail-src="post.thumbnailSrc"
      :resource-url="post.resourceUrl"
      :upvotes-count="post.upvotesCount"
      :views-count="post.viewsCount"
      :tags="post.tags"
    />
  </div>
</template>
<script lang="ts" setup>
export interface PostListProps {
  data: any[];
}

const props = defineProps<PostListProps>();
</script>
