<template>
  <Modal @close="$emit('close')" title="Create new post">
    <VeeForm
      class="flex flex-col gap-y-2"
      :validation-schema="validationSchema"
      @submit="handleSubmit"
    >
      <VeeField name="title" v-slot="{ field, errorMessage }">
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text font-bold">Title</span>
          </div>
          <input
            v-bind="field"
            type="text"
            name="title"
            class="input"
            :class="{ 'input-error': errorMessage }"
            v-validate="'required'"
          />
          <div v-if="errorMessage" class="label">
            <span class="label-text-alt text-error">{{ errorMessage }}</span>
          </div>
        </label>
      </VeeField>
      <VeeField name="tldr" v-slot="{ field, errorMessage }">
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text font-bold">Tldr</span>
          </div>
          <textarea
            v-bind="field"
            type="text"
            name="tldr"
            class="input h-32 pt-4 resize-none"
            :class="{ 'input-error': errorMessage }"
          />
          <div v-if="errorMessage" class="label">
            <span class="label-text-alt text-error">{{ errorMessage }}</span>
          </div>
        </label>
      </VeeField>
      <VeeField name="sourceUrl" v-slot="{ field, errorMessage }">
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text font-bold">Source url</span>
          </div>
          <input
            v-bind="field"
            type="url"
            name="sourceUrl"
            class="input"
            :class="{ 'input-error': errorMessage }"
          />
          <div v-if="errorMessage" class="label">
            <span class="label-text-alt text-error">{{ errorMessage }}</span>
          </div>
        </label>
      </VeeField>
      <VeeField name="tags" v-slot="{ field, errorMessage }">
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text font-bold">Tags</span>
          </div>
          <span
            v-if="!tagsData"
            class="skeleton rounded h-16 w-full bg-gray-100"
          ></span>
          <select
            v-else
            v-bind="field"
            name="tags"
            class="select select-bordered"
            :class="{ 'input-error': errorMessage }"
            multiple
          >
            <option disabled selected>Select tags</option>
            <option v-for="tag in tagsData" :key="tag.id" :value="tag.id">
              {{ tag.name }}
            </option>
          </select>
          <div v-if="errorMessage" class="label">
            <span class="label-text-alt text-error">{{ errorMessage }}</span>
          </div>
        </label>
      </VeeField>
      <button class="btn btn-primary" type="submit">Submit</button>
    </VeeForm>
  </Modal>
</template>
<script setup lang="ts">
import { push } from "notivue";
import type { DefaultModalEmits } from "../modal";
import { postSchema, type CreatePostBody } from "@@/validation/post.schema";

const validationSchema = toTypedSchema(postSchema);

const { data: tagsData } = await useLazyFetch("/api/tags");

const emits = defineEmits<DefaultModalEmits>();

const successCallback = () => {
  push.success("Post created successfully");
  emits("close");
};

const errorCallback = () => {
  push.error("Something went wrong, please try again");
  emits("close");
};

const handleSubmit = async (values: CreatePostBody) =>
  await $fetch("/api/posts", {
    method: "POST",
    body: values,
  })
    .then(successCallback)
    .catch(errorCallback);
</script>
