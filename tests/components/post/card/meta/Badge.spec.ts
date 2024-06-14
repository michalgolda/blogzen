import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import PostCardMetaBadge from "@@/components/post/card/meta/Badge.vue";

describe("PostCardMetaBadge", () => {
  const commonOptions = {
    attrs: {
      icon: "tabler:eye",
      value: 1,
    },
  };

  it("ensure props forwarding works properly", async () => {
    const component = await mountSuspended(PostCardMetaBadge, commonOptions);

    expect(component.text()).toBe("1");
  });

  it("renders unchanged", async () => {
    const component = await mountSuspended(PostCardMetaBadge, commonOptions);

    expect(component.html()).toMatchInlineSnapshot(`
      "<div class="btn btn-sm flex-1 btn-ghost bg-gray-100 hover:bg-gray-100 no-animation"><svg data-v-1a166b3b="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon text-primary" width="1em" height="1em" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></path>
            <path d="M21 12q-3.6 6-9 6t-9-6q3.6-6 9-6t9 6"></path>
          </g>
        </svg> 1</div>"
    `);
  });
});
