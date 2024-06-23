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
        @submit="handleSignInWithEmailAndPassword"
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
      <div
        class="divider before:bg-gray-300 after:bg-gray-300 font-semibold text-gray-700"
      >
        OR
      </div>
      <div class="flex flex-row gap-x-2">
        <button
          class="btn hover:bg-black/80 bg-black text-white flex-1"
          type="button"
          @click="handleSignInWithGithub"
        >
          <Icon name="mdi:github" size="2rem" />
          Login with Github
        </button>
        <button
          class="btn hover:bg-gray-100 border bg-white text-black flex-1"
          type="button"
          @click="handleSignInWithGoogle"
        >
          <Icon name="devicon:google" size="1.5rem" />
          Login with Google
        </button>
      </div>
    </template>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { signInSchema, type SignInBody } from "@@/validation/user.schema";

const signInWithEmailAndPassword = useSignInWithEmailAndPassword();
const signInWithGithub = useSignInWithGithub();
const signInWithGoogle = useSignInWithGoogle();

const validationSchema = toTypedSchema(signInSchema);

const handleSignInWithEmailAndPassword = async (data: SignInBody) =>
  await signInWithEmailAndPassword(data);

const handleSignInWithGithub = async () => await signInWithGithub();

const handleSignInWithGoogle = async () => await signInWithGoogle();
</script>
