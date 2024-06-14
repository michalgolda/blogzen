import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import PostCardSkeleton from "@@/components/post/card/Skeleton.vue";

describe("PostCardSkeleton component", () => {
  it("renders unchanged", async () => {
    const component = await mountSuspended(PostCardSkeleton);

    expect(component.html()).toMatchInlineSnapshot(`
      "<div class="rounded bg-white w-full p-4 flex flex-col gap-y-4">
        <div class="skeleton rounded square bg-gray-100 w-full h-48"></div>
        <div class="skeleton rounded square bg-gray-100 w-full h-8"></div>
        <div class="skeleton rounded square bg-gray-100 w-full h-4"></div>
        <div class="skeleton rounded square bg-gray-100 w-full h-4"></div>
        <div class="skeleton rounded square bg-gray-100 w-full h-4"></div>
        <div class="flex flex-row gap-x-2">
          <div class="skeleton rounded square bg-gray-100 w-full h-8"></div>
          <div class="skeleton rounded square bg-gray-100 w-full h-8"></div>
          <div class="skeleton rounded square bg-gray-100 w-full h-8"></div>
        </div>
      </div>"
    `);
  });
});
