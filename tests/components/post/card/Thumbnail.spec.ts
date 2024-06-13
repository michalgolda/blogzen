import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import PostCardThumbnail from "@@/components/post/card/Thumbnail.vue";

describe("PostCardThumbnail component", () => {
  const commonOptions = {
    attrs: {
      src: "/thumbnail.jpg",
      alt: "thumbnail",
    },
  };

  it("ensure props forwarding works properly", async () => {
    const component = await mountSuspended(PostCardThumbnail, commonOptions);

    const img = component.findComponent("img");
    const imgAttributes = img.attributes();

    expect(img.exists()).toBeTruthy();
    expect(imgAttributes).toHaveProperty(
      "src",
      `/_ipx/fit_fill${commonOptions.attrs.src}`
    );
    expect(imgAttributes).toHaveProperty("alt", commonOptions.attrs.alt);
  });

  it("renders unchanged", async () => {
    const component = await mountSuspended(PostCardThumbnail, commonOptions);

    expect(component.html()).toMatchInlineSnapshot(
      `"<img alt="thumbnail" data-nuxt-img="" srcset="/_ipx/fit_fill/thumbnail.jpg 1x, /_ipx/fit_fill/thumbnail.jpg 2x" src="/_ipx/fit_fill/thumbnail.jpg" class="w-full rounded">"`
    );
  });
});
