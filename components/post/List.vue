<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8"
  >
    <PostCard
      v-if="data"
      v-for="(post, index) in data"
      :key="index"
      :title="post.title"
      :tldr="post.tldr"
      :created-at="post.createdAt.toDateString()"
      :thumbnail-src="post.thumbnailUrl"
      :resource-url="post.resourceUrl"
      :upvotes-count="post.upvotesCount"
      :views-count="post.viewsCount"
      :tags="mapTagNames(post.tags)"
    />
  </div>
</template>
<script lang="ts" setup>
export interface PostListProps {
  data: any[];
}

const props = defineProps<PostListProps>();

const mapTagNames = (tags: { name: string }[]) => tags.map((tag) => tag.name);
</script>
