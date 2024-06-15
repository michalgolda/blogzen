<template>
  <div class="min-h-screen">
    <Nav />
    <main class="container mx-auto px-2 py-8">
      <slot />
    </main>
    <ModalsContainer />
  </div>
</template>
<script setup lang="ts">
import { ModalsContainer } from "vue-final-modal";
</script>
