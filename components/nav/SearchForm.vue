<template>
  <form autocomplete="off">
    <label class="input flex items-center gap-2">
      <input
        type="search"
        placeholder="What do you search?"
        name="search"
        ref="input"
        v-model="searchQuery"
      />
      <kbd class="kbd kbd-sm border-gray-300 bg-gray">Ctrl</kbd>
      <kbd class="kbd kbd-sm border-gray-300 bg-gray">K</kbd>
    </label>
  </form>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";

const { searchQuery } = useSearchPostsQuery();

const input = ref();

onMounted(() => {
  window.addEventListener("keydown", (e) => {
    if (e.key === "k" && e.ctrlKey) {
      e.preventDefault();

      input.value.focus();
    }
  });
});
</script>
