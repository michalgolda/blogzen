import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import NuxtLink from "nuxt";
import PostCardMeta from "@@/components/post/card/meta/index.vue";
import PostCardMetaBadge from "@@/components/post/card/meta/Badge.vue";

describe("PostCardMeta", () => {
  const commonOptions = {
    attrs: {
      upvotesCount: 1,
      viewsCount: 2,
      resourceUrl: "/r/test",
    },
  };

  it("ensure props forwarding works properly", async () => {
    const component = await mountSuspended(PostCardMeta, commonOptions);

    const link = component.find("a");
    const badges = component.findAllComponents(PostCardMetaBadge);
    const upvotesBadge = badges[0];
    const viewsBadge = badges[1];

    expect(badges.length).toBe(2);
    expect(upvotesBadge.props("value")).toBe(commonOptions.attrs.upvotesCount);
    expect(viewsBadge.props("value")).toBe(commonOptions.attrs.viewsCount);

    expect(link.exists()).toBeTruthy();
    expect(link.element).toHaveProperty(
      "href",
      `http://localhost:3000${commonOptions.attrs.resourceUrl}`
    );
  });

  it("renders unchanged", async () => {
    const component = await mountSuspended(PostCardMeta, commonOptions);

    expect(component.html()).toMatchInlineSnapshot(`
      "<div class="flex flex-col flex-1 justify-end gap-2">
        <div class="flex flex-row gap-2">
          <div class="btn btn-sm flex-1 btn-ghost bg-gray-100 hover:bg-gray-100 hover:bg-gray-200"><span data-v-f2edb3ec="" class="icon text-primary" style="font-size: 1em; line-height: 1em; width: 1em; height: 1em;">tabler:arrow-big-up-line</span> 1</div>
          <div class="btn btn-sm flex-1 btn-ghost bg-gray-100 hover:bg-gray-100 no-animation"><span data-v-f2edb3ec="" class="icon text-primary" style="font-size: 1em; line-height: 1em; width: 1em; height: 1em;">tabler:eye</span> 2</div>
        </div><a href="/r/test"><button class="btn w-full btn-sm bg-black text-white hover:bg-black/80 bg-black"> Read post <span data-v-f2edb3ec="" class="icon" style="font-size: 1em; line-height: 1em; width: 1em; height: 1em;">tabler:external-link</span></button></a>
      </div>"
    `);
  });
});
