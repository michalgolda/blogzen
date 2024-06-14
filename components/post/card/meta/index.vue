<template>
  <div class="flex flex-col flex-1 justify-end gap-2">
    <div class="flex flex-row gap-2">
      <PostCardMetaBadge
        icon="tabler:arrow-big-up-line"
        :value="upvotesCount"
      />
      <PostCardMetaBadge icon="tabler:eye" :value="viewsCount" />
    </div>

    <NuxtLink :to="resourceUrl">
      <button
        class="btn w-full btn-sm bg-black text-white hover:bg-black/80 bg-black"
      >
        Read post
        <Icon name="tabler:external-link" /></button
    ></NuxtLink>
  </div>
</template>
<script setup lang="ts">
export interface PostCardMetaProps {
  upvotesCount: number;
  viewsCount: number;
  resourceUrl: string;
}

const props = defineProps<PostCardMetaProps>();
</script>
