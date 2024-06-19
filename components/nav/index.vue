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
        <template v-if="userEmail">
          <div class="flex flex-row gap-x-2 items-center">
            <button
              class="btn btn-primary mr-2"
              aria-label="create-post"
              @click="createPostModal.open()"
            >
              <Icon name="ph:plus-bold" />
              Create new post
            </button>
            <div class="avatar placeholder">
              <div class="bg-black text-white rounded-full w-12">
                <span class="text-sm">{{ userEmail[0].toUpperCase() }}</span>
              </div>
            </div>
            <span>{{ userEmail }}</span>
            <button
              aria-label="logout"
              class="btn btn-ghost btn-sm bg-gray-300 btn-square hover:bg-gray-300/80"
              @click="handleLogut"
            >
              <Icon name="line-md:logout" />
            </button>
          </div>
        </template>
        <template v-else>
          <NuxtLink to="/auth/signin">
            <button class="btn btn-primary btn-outline">Sign in</button>
          </NuxtLink>
          <NuxtLink to="/auth/signup">
            <button class="btn btn-primary btn">Sign up</button>
          </NuxtLink>
        </template>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
const createPostModal = usePostCreateModal();
const supabaseClient = useClientSideSupabaseClient();

export type NavProps = {
  userEmail?: string;
};

const props = defineProps<NavProps>();

const handleLogut = async () =>
  await supabaseClient.auth.signOut().then(() => window.location.reload());
</script>
