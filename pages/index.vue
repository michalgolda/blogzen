<template>
  <NuxtLayout name="main">
    <PostList v-if="data" :data="data" />
  </NuxtLayout>
</template>
<script setup lang="ts">
const { data, suspense } = useGetAllPostsQuery();

await suspense();
</script>
