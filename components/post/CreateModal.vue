<template>
  <Modal
    @close="$emit('close')"
    title="Create new post"
    :validation-schema="validationSchema"
  >
    <VeeForm class="flex flex-col gap-y-2" @submit="handleSubmit">
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text font-bold">Thumbnail</span>
        </div>
        <input
          type="file"
          @change="thumbnailFileField.handleChange"
          @blur="thumbnailFileField.handleBlur"
          name="thumbnailFile"
          class="file-input input w-full p-0"
        />
      </label>

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
            v-if="tagsIsLoading"
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
            <option v-for="tag in tags" :key="tag.id" :value="tag.id">
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
import type { DefaultModalEmits } from "../modal";
import { postSchema, type CreatePostBody } from "@@/validation/post.schema";

const { data: tags, isLoading: tagsIsLoading } = useGetAllTagsQuery();
const createPostMutation = useCreatePostMutation();
const thumbnailFileField = useField<File>("thumbnailFile");
const supabaseClient = useClientSideSupabaseClient();

const validationSchema = toTypedSchema(postSchema);

const emits = defineEmits<DefaultModalEmits>();

const handleSubmit = async (values: CreatePostBody) => {
  const thumbnailFile = thumbnailFileField.value.value;
  const thumbnailFileName = thumbnailFile.name;
  const thumbnailFileType = thumbnailFile.type;

  await supabaseClient.storage
    .from("post-thumbnails")
    .upload(thumbnailFileName, thumbnailFile, {
      upsert: true,
      contentType: thumbnailFileType,
    })
    .then(async () => {
      const thumbnailUrl = supabaseClient.storage
        .from("post-thumbnails")
        .getPublicUrl(thumbnailFileName).data.publicUrl;

      createPostMutation.mutate(
        {
          ...values,
          thumbnailUrl,
        },
        {
          onSettled: () => emits("close"),
        }
      );
    });
};
</script>
