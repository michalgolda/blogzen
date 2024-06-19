<template>
  <div class="min-h-screen">
    <Nav :user-email="userEmail" />
    <main class="container mx-auto px-2 py-8">
      <slot />
    </main>
  </div>
</template>
<script setup lang="ts">
import { darkTheme } from "notivue";
import { ModalsContainer } from "vue-final-modal";

const supabaseClient = useServerSideSupabaseClient();
const { data } = await supabaseClient.auth.getUser();
const userEmail = computed(() => (data?.user ? data.user.email : null));
</script>
