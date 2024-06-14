import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import PostCardMetaBadge from "@@/components/post/card/meta/Badge.vue";

describe("PostCardMetaBadge component", () => {
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

  it("ensure emit events works properly and clickable classes has applied to element", async () => {
    const component = await mountSuspended(PostCardMetaBadge, {
      ...commonOptions,
      attrs: {
        ...commonOptions.attrs,
        clickable: true,
      },
    });

    component.trigger("click");

    expect(component.emitted("click")).toBeTruthy();
    expect(component.classes()).toContain("hover:bg-gray-200");
  });

  it("renders unchanged", async () => {
    const component = await mountSuspended(PostCardMetaBadge, commonOptions);

    expect(component.html()).toMatchInlineSnapshot(`"<div class="btn btn-sm flex-1 btn-ghost bg-gray-100 hover:bg-gray-100 no-animation"><span data-v-f2edb3ec="" class="icon text-primary" style="font-size: 1em; line-height: 1em; width: 1em; height: 1em;">tabler:eye</span> 1</div>"`);
  });
});
