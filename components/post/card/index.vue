<template>
  <div class="card p-4 shadow-none border w-full bg-base-100">
    <PostCardThumbnail :src="thumbnailSrc" :alt="title" />
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
export interface PostCardProps {
  title: string;
  tldr: string;
  tags: string[];
  upvotesCount: number;
  viewsCount: number;
  resourceUrl: string;
  thumbnailSrc: string;
  createdAt: string;
}

const props = defineProps<PostCardProps>();
</script>
