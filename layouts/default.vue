<template>
  <div class="min-h-screen">
    <Nav />
    <main class="container mx-auto px-2 py-8">
      <slot />
    </main>
    <Notivue v-slot="item">
      <Notification :theme="darkTheme" :item="item" />
    </Notivue>
    <ModalsContainer />
  </div>
</template>
<script setup lang="ts">
import { darkTheme } from "notivue";
import { ModalsContainer } from "vue-final-modal";
</script>
