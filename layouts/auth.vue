<template>
  <div class="w-full h-screen flex justify-center">
    <div
      class="flex flex-col mt-32 mx-4 p-4 rounded max-w-md h-fit w-full border bg-white"
    >
      <Logo class="mx-auto mt-4 mb-8" />
      <div class="flex flex-col gap-y-4">
        <slot name="header" />
        <slot name="form" />
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const supabaseClient = useServerSideSupabaseClient();
const { data } = await supabaseClient.auth.getUser();

if (data?.user) await navigateTo("/");
</script>
