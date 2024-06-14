import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import PostCard from "@@/components/post/card/index.vue";
import PostCardThumbnail from "@@/components/post/card/Thumbnail.vue";
import PostCardBody from "@@/components/post/card/Body.vue";
import PostCardMeta from "@@/components/post/card/meta/index.vue";

describe("PostCard component", () => {
  const commonOptions = {
    attrs: {
      title: "test test",
      tldr: "test tldr",
      tags: ["tag1", "tag2"],
      createdAt: "test created at",
      upvotesCount: 1,
      viewsCount: 2,
      resourceUrl: "/r/test",
      thumbnailSrc: "/r/test",
    },
  };

  it("ensure props forwarding works properly", async () => {
    const component = await mountSuspended(PostCard, commonOptions);

    const thumbnail = component.findComponent(PostCardThumbnail);
    const body = component.findComponent(PostCardBody);
    const meta = component.findComponent(PostCardMeta);

    expect(thumbnail.exists()).toBeTruthy();
    expect(thumbnail.props("src")).toBe(commonOptions.attrs.thumbnailSrc);
    expect(thumbnail.props("alt")).toBe(commonOptions.attrs.title);

    expect(body.exists()).toBeTruthy();
    expect(body.props("createdAt")).toBe(commonOptions.attrs.createdAt);
    expect(body.props("title")).toBe(commonOptions.attrs.title);
    expect(body.props("tldr")).toBe(commonOptions.attrs.tldr);
    expect(body.props("tags")).toBe(commonOptions.attrs.tags);

    expect(meta.exists()).toBeTruthy();
    expect(meta.props("upvotesCount")).toBe(commonOptions.attrs.upvotesCount);
    expect(meta.props("viewsCount")).toBe(commonOptions.attrs.viewsCount);
    expect(meta.props("resourceUrl")).toBe(commonOptions.attrs.resourceUrl);
  });

  it("renders unchanged", async () => {
    const component = await mountSuspended(PostCard, commonOptions);

    expect(component.html()).toMatchInlineSnapshot(`
      "<div class="card p-4 shadow-none border w-full bg-base-100">
        <figure class="rounded flex-none"><img alt="test test" data-nuxt-img="" srcset="/_ipx/fit_fill/r/test 1x, /_ipx/fit_fill/r/test 2x" src="/_ipx/fit_fill/r/test" class="w-full"></figure>
        <div class="my-4 flex-none">
          <div class="flex flex-row gap-2 mb-1">
            <div class="badge badge-secondary font-semibold rounded text-white border-none gap-2"> #tag1</div>
            <div class="badge badge-secondary font-semibold rounded text-white border-none gap-2"> #tag2</div>
          </div><span class="text-sm text-gray-500">test created at</span>
          <h3 class="card-title line-clamp-3">test test</h3>
          <p class="line-clamp-3 mt-1 text-gray-700">test tldr</p>
        </div>
        <div class="flex flex-col flex-1 justify-end gap-2">
          <div class="flex flex-row gap-2">
            <div class="btn btn-sm flex-1 btn-ghost bg-gray-100 hover:bg-gray-100 hover:bg-gray-200"><span data-v-f2edb3ec="" class="icon text-primary" style="font-size: 1em; line-height: 1em; width: 1em; height: 1em;">tabler:arrow-big-up-line</span> 1</div>
            <div class="btn btn-sm flex-1 btn-ghost bg-gray-100 hover:bg-gray-100 no-animation"><span data-v-f2edb3ec="" class="icon text-primary" style="font-size: 1em; line-height: 1em; width: 1em; height: 1em;">tabler:eye</span> 2</div>
          </div><a href="/r/test"><button class="btn w-full btn-sm bg-black text-white hover:bg-black/80 bg-black"> Read post <span data-v-f2edb3ec="" class="icon" style="font-size: 1em; line-height: 1em; width: 1em; height: 1em;">tabler:external-link</span></button></a>
        </div>
      </div>"
    `);
  });
});
