<template>
  <figure class="rounded">
    <NuxtImg class="w-full" :src="src" :alt="alt" fit="fill" />
  </figure>
</template>
<script setup lang="ts">
export interface ThumbnailProps {
  src: string;
  alt: string;
}

const props = defineProps<ThumbnailProps>();
</script>
