<template>
  <NuxtLayout name="auth">
    <template #header>
      <div>
        <h2 class="font-bold text-2xl">Sign in</h2>
        <p class="text-gray-700">
          Welcome back! Please use form below to login to your account
        </p>
      </div>
    </template>
    <template #form>
      <VeeForm
        class="flex flex-col gap-y-2"
        :validation-schema="validationSchema"
        @submit="handleSubmit"
      >
        <VeeField name="email" v-slot="{ field, errorMessage }">
          <label class="form-control w-full">
            <div class="label">
              <span class="label-text font-bold">E-mail</span>
            </div>
            <input
              v-bind="field"
              type="email"
              name="email"
              class="input"
              :class="{ 'input-error': errorMessage }"
            />
            <div v-if="errorMessage" class="label">
              <span class="label-text-alt text-error">{{ errorMessage }}</span>
            </div>
          </label>
        </VeeField>
        <VeeField name="password" v-slot="{ field, errorMessage }">
          <label class="form-control w-full">
            <div class="label">
              <span class="label-text font-bold">Password</span>
            </div>
            <input
              v-bind="field"
              type="password"
              name="password"
              class="input"
              :class="{ 'input-error': errorMessage }"
            />
            <div v-if="errorMessage" class="label">
              <span class="label-text-alt text-error">{{ errorMessage }}</span>
            </div>
          </label>
        </VeeField>
        <button class="btn btn-primary btn-block mt-2" type="submit">
          Sign in
        </button>
      </VeeForm>
    </template>
    <template #footer>
      <span class="text-gray-700">
        Don't have an account yet?
        <NuxtLink class="font-semibold underline" to="/auth/signup">
          Sign up
        </NuxtLink>
      </span>
    </template>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { signInSchema, type SignInBody } from "@@/validation/user.schema";

const validationSchema = toTypedSchema(signInSchema);

const supabaseClient = useClientSideSupabaseClient();

const handleSubmit = async (data: SignInBody) =>
  await supabaseClient.auth.signInWithPassword(data).then(async ({ error }) => {
    const isOk = !error;
    const isUnexpectedError = error ? error.status === 500 : false;

    if (isOk) {
      push.success("Successfully logged in");
      await navigateTo("/");
    }

    isUnexpectedError &&
      push.error("Something went wrong, please try again later");
    !isUnexpectedError && !isOk && push.info(error.message);
  });
</script>
