<template>
  <NuxtLayout name="auth">
    <template #header>
      <div>
        <h2 class="font-bold text-2xl">Sign up</h2>
        <p class="text-gray-700">
          Welcome! You can create account using form below
        </p>
      </div>
    </template>
    <template #form>
      <VeeForm class="flex flex-col gap-y-2">
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
        <VeeField name="password" v-slot="{ field, errorMessage }">
          <label class="form-control w-full">
            <div class="label">
              <span class="label-text font-bold">Confirm password</span>
            </div>
            <input
              v-bind="field"
              type="password"
              name="confirmPassword"
              class="input"
              :class="{ 'input-error': errorMessage }"
            />
            <div v-if="errorMessage" class="label">
              <span class="label-text-alt text-error">{{ errorMessage }}</span>
            </div>
          </label>
        </VeeField>
        <button class="btn btn-primary btn-block mt-2" type="submit">
          Sign up
        </button>
      </VeeForm>
    </template>
    <template #footer>
      <span class="text-gray-700">
        You have already account?
        <NuxtLink class="font-semibold underline" to="/auth/signin">
          Sign in
        </NuxtLink>
      </span>
    </template>
  </NuxtLayout>
</template>
