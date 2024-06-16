<template>
  <div class="my-4 flex-none">
    <div class="flex flex-row gap-2 mb-1">
      <div
        v-for="(tag, index) in tags"
        :key="index"
        class="badge badge-secondary font-semibold rounded text-white border-none gap-2"
      >
        #{{ tag.name }}
      </div>
    </div>
    <span class="text-sm text-gray-500">{{ createdAt.toDateString() }}</span>
    <h3 class="card-title line-clamp-3">
      {{ title }}
    </h3>
    <p class="line-clamp-3 mt-1 text-gray-700">
      {{ tldr }}
    </p>
  </div>
</template>
<script setup lang="ts">
import type { Post, Tag } from "@@/main";

export type PostCardBodyProps = Pick<Post, "title" | "tldr" | "createdAt"> & {
  tags: Pick<Tag, "name">[];
};

const props = defineProps<PostCardBodyProps>();
</script>
