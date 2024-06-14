import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import PostCardBody from "@@/components/post/card/Body.vue";

describe("PostCardBody component", () => {
  const commonOptions = {
    attrs: {
      title: "test test",
      tldr: "test tldr",
      tags: ["tag1", "tag2"],
      createdAt: "test created at",
    },
  };

  it("ensure props forwarding works properly", async () => {
    const component = await mountSuspended(PostCardBody, commonOptions);

    const tags = component.findAll(".badge");
    const firstTag = tags[0];
    const secondTag = tags[1];

    const createdAt = component.find("span");
    const title = component.find("h3");
    const tldr = component.find("p");

    expect(tags.length).toBe(2);
    expect(firstTag.text()).toBe(`#${commonOptions.attrs.tags[0]}`);
    expect(secondTag.text()).toBe(`#${commonOptions.attrs.tags[1]}`);

    expect(createdAt.exists()).toBeTruthy();
    expect(createdAt.text()).toBe(commonOptions.attrs.createdAt);

    expect(title.exists()).toBeTruthy();
    expect(title.text()).toBe(commonOptions.attrs.title);

    expect(tldr.exists()).toBeTruthy();
    expect(tldr.text()).toBe(commonOptions.attrs.tldr);
  });

  it("renders unchanged", async () => {
    const component = await mountSuspended(PostCardBody, commonOptions);

    expect(component.html()).toMatchInlineSnapshot(`
      "<div class="my-4 flex-none">
        <div class="flex flex-row gap-2 mb-1">
          <div class="badge badge-secondary font-semibold rounded text-white border-none gap-2"> #tag1</div>
          <div class="badge badge-secondary font-semibold rounded text-white border-none gap-2"> #tag2</div>
        </div><span class="text-sm text-gray-500">test created at</span>
        <h3 class="card-title line-clamp-3">test test</h3>
        <p class="line-clamp-3 mt-1 text-gray-700">test tldr</p>
      </div>"
    `);
  });
});
