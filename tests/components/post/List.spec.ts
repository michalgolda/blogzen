import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import PostList from "@@/components/post/List.vue";

describe("PostList component", () => {
  const commonOptions = {
    attrs: {
      data: [
        {
          title: "Frontend resources!",
          tldr: "A collection of frontend resources for UI creation, performance optimization, and more.",
          thumbnailSrc: "/thumbnail.webp",
          createdAt: "12 march 2032",
          resourceUrl: "/r/asd",
          tags: ["javascript", "react", "css"],
          upvotesCount: 123,
          viewsCount: 64,
        },
        {
          title: "Frontend resources!",
          tldr: "A collection of frontend resources for UI creation, performance optimization, and more.",
          thumbnailSrc: "/thumbnail.webp",
          createdAt: "12 march 2032",
          resourceUrl: "/r/asd",
          tags: ["javascript", "react", "css"],
          upvotesCount: 123,
          viewsCount: 64,
        },
      ],
    },
  };

  it("renders unchanged", async () => {
    const component = await mountSuspended(PostList, commonOptions);

    expect(component.html()).toMatchInlineSnapshot(
      `
      "<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8">
        <!-- <PostCard
            v-for="(post, index) in data"
            :key="index"
            :title="post.title"
            :tldr="post.tldr"
            :created-at="post.createdAt.toDateString()"
            :thumbnail-src="post.thumbnailUrl"
            :resource-url="post.resourceUrl"
            :upvotes-count="post.upvotesCount"
            :views-count="post.viewsCount"
            :tags="post.tags.map((tag: any) => tag.name)"
          /> -->
        <div class="rounded bg-white w-full p-4 flex flex-col gap-y-4">
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
        </div>
      </div>"
    `
    );
  });
});
