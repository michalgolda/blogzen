import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import PostCardBody from "@@/components/post/card/Body.vue";

describe("PostCardBody component", () => {
  const date = new Date();
  const commonOptions = {
    attrs: {
      title: "test test",
      tldr: "test tldr",
      tags: [
        {
          name: "tag1",
        },
        {
          name: "tag2",
        },
      ],
      createdAt: date.toISOString(),
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
    expect(firstTag.text()).toBe(`#${commonOptions.attrs.tags[0].name}`);
    expect(secondTag.text()).toBe(`#${commonOptions.attrs.tags[1].name}`);

    expect(createdAt.exists()).toBeTruthy();
    expect(createdAt.text()).toBe(date.toDateString());

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
        </div><span class="text-sm text-gray-500">Tue Jun 18 2024</span>
        <h3 class="card-title line-clamp-3">test test</h3>
        <p class="line-clamp-3 mt-1 text-gray-700">test tldr</p>
      </div>"
    `);
  });
});
