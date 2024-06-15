<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style lang="css">
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-gray-100;
}

.input {
  @apply border-gray-300;
}

.input:focus-within {
  outline: none;
}
</style>
