<template>
  <div class="flex flex-col flex-1 justify-end gap-2">
    <div class="flex flex-row gap-2">
      <PostCardMetaBadge
        icon="tabler:arrow-big-up-line"
        :value="upvotesCount"
        @click="handleUpvote"
        clickable
      />
      <PostCardMetaBadge icon="tabler:eye" :value="viewsCount" />
    </div>

    <NuxtLink :to="redirectUrl" external>
      <button
        class="btn w-full btn-sm bg-black text-white hover:bg-black/80 bg-black"
      >
        Read post
        <Icon name="tabler:external-link" /></button
    ></NuxtLink>
  </div>
</template>
<script setup lang="ts">
import type { Post } from "@@/client";

export type PostCardMetaProps = Pick<
  Post,
  "id" | "redirectCode" | "upvotesCount" | "viewsCount"
>;

const props = defineProps<PostCardMetaProps>();

const upvotePostMutation = useUpvotePostMutation();

const handleUpvote = () => upvotePostMutation.mutate(props.id);

const redirectUrl = computed(() => `/api/redirect/${props.redirectCode}`);
</script>
