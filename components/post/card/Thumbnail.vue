<template>
  <figure>
    <NuxtImg class="w-full rounded" :src="src" :alt="alt" fit="fill" />
  </figure>
</template>
<script setup lang="ts">
export interface ThumbnailProps {
  src: string;
  alt: string;
}

const props = defineProps<ThumbnailProps>();
</script>
