<template>
  <div>
    <slot />
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
