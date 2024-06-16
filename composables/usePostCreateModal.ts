import { useModal } from "vue-final-modal";
import PostCreateModal from "@@/components/post/CreateModal.vue";

export const usePostCreateModal = () => {
  const modal = useModal({
    component: PostCreateModal,
    attrs: {
      onClose: () => modal.close(),
    },
  });

  return modal;
};
