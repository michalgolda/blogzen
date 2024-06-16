<template>
  <nav class="bg-base-100 border-b">
    <div class="navbar container p-4 mx-auto">
      <div class="flex-none">
        <Logo />
      </div>
      <div class="flex-1 ml-8">
        <NavSearchForm />
      </div>
      <div class="flex flex-row gap-x-2">
        <button @click="createPostModal.open()" class="btn btn-primary">
          <Icon name="ph:plus-bold" />
          Create new post
        </button>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
const createPostModal = usePostCreateModal();
</script>
