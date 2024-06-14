<template>
  <figure class="rounded flex-none">
    <NuxtImg class="w-full" :src="src" :alt="alt" fit="fill" />
  </figure>
</template>
<script setup lang="ts">
export interface PostCardThumbnailProps {
  src: string;
  alt: string;
}

const props = defineProps<PostCardThumbnailProps>();
</script>
