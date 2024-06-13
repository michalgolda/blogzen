<template>
  <nav class="bg-base-100">
    <div class="navbar container mx-auto">
      <div class="flex-none">
        <Logo />
      </div>
      <div class="flex-1 ml-8">
        <NavSearchForm />
      </div>
      <div class="flex flex-row gap-x-2">
        <button class="btn btn-primary">
          <Icon name="ph:plus-bold" />
          Create new post
        </button>
      </div>
    </div>
  </nav>
</template>
