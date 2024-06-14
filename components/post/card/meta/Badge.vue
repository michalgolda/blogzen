<template>
  <div
    class="btn btn-sm flex-1 btn-ghost bg-gray-100 hover:bg-gray-100"
    :class="clickableClasses"
    @click="$emit('click')"
  >
    <Icon class="text-primary" :name="icon" />
    {{ value }}
  </div>
</template>
<script setup lang="ts">
export interface PostCardMetaBadgeProps {
  icon: string;
  value: number;
  clickable?: boolean;
}

export type PostCardMetaBadgeEmits = {
  click: [];
};

const props = withDefaults(defineProps<PostCardMetaBadgeProps>(), {
  clickable: false,
});
const emits = defineEmits<PostCardMetaBadgeEmits>();

const clickableClasses = computed(() =>
  props.clickable ? "hover:bg-gray-200" : "no-animation"
);
</script>
