<template>
  <PostList :data="data" />
</template>
<script setup lang="ts">
const data = computed(() => [
  {
    title: "Frontend resources!",
    tldr: "A collection of frontend resources for UI creation, performance optimization, and more.",
    thumbnailSrc: "/thumbnail.webp",
    createdAt: "12 march 2032",
    resourceUrl: "/r/asd",
    tags: ["javascript", "react", "css"],
    upvotesCount: 123,
    viewsCount: 64,
  },
]);
</script>
