<template>
  <PostList v-if="data" :data="data" />
</template>
<script setup lang="ts">
const { data, suspense } = useGetAllPostsQuery();

await suspense();
</script>
