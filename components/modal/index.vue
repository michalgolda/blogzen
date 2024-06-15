<template>
  <VueFinalModal
    v-bind="$attrs"
    content-class="flex justify-center items-center h-screen"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <div class="bg-white h-fit -mt-32 rounded p-4 max-w-2xl w-full">
      <div class="flex flex-row items-center">
        <h3 class="text-2xl font-semibold flex-1 text-center">{{ title }}</h3>
        <button @click="$emit('close')" class="btn btn-sm btn-ghost btn-square">
          <Icon name="ic:round-close" size="2rem" />
        </button>
      </div>
      <slot />
    </div>
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
import type { DefaultModalEmits } from "./types";

export interface ModalProps {
  title: string;
}

const props = defineProps<ModalProps>();
const emits = defineEmits<DefaultModalEmits>();
</script>
