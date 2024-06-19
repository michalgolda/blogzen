import { describe, it, expect, vi } from "vitest";
import { mountSuspended, mockNuxtImport } from "@nuxt/test-utils/runtime";
import PostCardMeta from "@@/components/post/card/meta/index.vue";
import PostCardMetaBadge from "@@/components/post/card/meta/Badge.vue";

const mutateMock = vi.fn();

mockNuxtImport("useUpvotePostMutation", () => () => ({
  mutate: mutateMock,
}));

describe("PostCardMeta component", () => {
  const commonOptions = {
    attrs: {
      id: "1",
      upvotesCount: 1,
      viewsCount: 2,
      redirectCode: "qwerty",
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
    expect(upvotesBadge.props("clickable")).toBeTruthy();

    expect(viewsBadge.props("value")).toBe(commonOptions.attrs.viewsCount);

    expect(link.exists()).toBeTruthy();
    expect(link.element).toHaveProperty(
      "href",
      `http://localhost:3000/api/redirect/${commonOptions.attrs.redirectCode}`
    );
  });

  it("ensure upvote after click on upvotes badge works properly", async () => {
    const component = await mountSuspended(PostCardMeta, commonOptions);

    const badges = component.findAllComponents(PostCardMetaBadge);
    const upvotesBadge = badges[0];

    expect(upvotesBadge.exists()).toBeTruthy();

    upvotesBadge.trigger("click");

    expect(mutateMock).toHaveBeenCalledWith(commonOptions.attrs.id);
  });

  it("renders unchanged", async () => {
    const component = await mountSuspended(PostCardMeta, commonOptions);

    expect(component.html()).toMatchInlineSnapshot(`
      "<div class="flex flex-col flex-1 justify-end gap-2">
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
        </div><a href="/api/redirect/qwerty"><button class="btn w-full btn-sm bg-black text-white hover:bg-black/80 bg-black"> Read post <svg data-v-f2edb3ec="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5"></path>
            </svg></button></a>
      </div>"
    `);
  });
});
