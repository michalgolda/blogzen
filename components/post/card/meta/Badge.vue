<template>
  <div
    class="btn btn-sm flex-1 btn-ghost bg-gray-100 hover:bg-gray-100 no-animation"
  >
    <Icon class="text-primary" :name="icon" />
    {{ value }}
  </div>
</template>
<script setup lang="ts">
export interface PostCardMetaBadgeProps {
  icon: string;
  value: number;
}

const props = defineProps<PostCardMetaBadgeProps>();
</script>
