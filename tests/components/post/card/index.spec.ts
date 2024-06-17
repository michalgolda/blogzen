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
      tags: [
        {
          name: "tag1",
        },
        {
          name: "tag2",
        },
      ],
      createdAt: new Date(),
      upvotesCount: 1,
      viewsCount: 2,
      redirectCode: "awdawd",
      thumbnailUrl: "/r/test",
    },
  };

  it("ensure props forwarding works properly", async () => {
    const component = await mountSuspended(PostCard, commonOptions);

    const thumbnail = component.findComponent(PostCardThumbnail);
    const body = component.findComponent(PostCardBody);
    const meta = component.findComponent(PostCardMeta);

    expect(thumbnail.exists()).toBeTruthy();
    expect(thumbnail.props("src")).toBe(commonOptions.attrs.thumbnailUrl);
    expect(thumbnail.props("alt")).toBe(commonOptions.attrs.title);

    expect(body.exists()).toBeTruthy();
    expect(body.props("createdAt")).toBe(commonOptions.attrs.createdAt);
    expect(body.props("title")).toBe(commonOptions.attrs.title);
    expect(body.props("tldr")).toBe(commonOptions.attrs.tldr);
    expect(body.props("tags")).toBe(commonOptions.attrs.tags);

    expect(meta.exists()).toBeTruthy();
    expect(meta.props("upvotesCount")).toBe(commonOptions.attrs.upvotesCount);
    expect(meta.props("viewsCount")).toBe(commonOptions.attrs.viewsCount);
    expect(meta.props("redirectCode")).toBe(commonOptions.attrs.redirectCode);
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
          </div><span class="text-sm text-gray-500">Mon Jun 17 2024</span>
          <h3 class="card-title line-clamp-3">test test</h3>
          <p class="line-clamp-3 mt-1 text-gray-700">test tldr</p>
        </div>
        <div class="flex flex-col flex-1 justify-end gap-2">
          <div class="flex flex-row gap-2">
            <div class="btn btn-sm flex-1 btn-ghost bg-gray-100 hover:bg-gray-100 hover:bg-gray-200"><svg data-v-f2edb3ec="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon text-primary" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12H5.414a1 1 0 0 1-.707-1.707l6.586-6.586a1 1 0 0 1 1.414 0l6.586 6.586A1 1 0 0 1 18.586 12H15v6H9zm0 9h6"></path>
              </svg> 1</div>
            <div class="btn btn-sm flex-1 btn-ghost bg-gray-100 hover:bg-gray-100 no-animation"><svg data-v-f2edb3ec="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon text-primary" width="1em" height="1em" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></path>
                  <path d="M21 12q-3.6 6-9 6t-9-6q3.6-6 9-6t9 6"></path>
                </g>
              </svg> 2</div>
          </div><a href="/api/redirect/awdawd"><button class="btn w-full btn-sm bg-black text-white hover:bg-black/80 bg-black"> Read post <svg data-v-f2edb3ec="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5"></path>
              </svg></button></a>
        </div>
      </div>"
    `);
  });
});
