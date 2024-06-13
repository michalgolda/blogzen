import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Logo from "@@/components/Logo.vue";

describe("Logo component", () => {
  it("renders unchanged", async () => {
    const component = await mountSuspended(Logo);

    expect(component.html()).toMatchInlineSnapshot(
      `"<a href="/" class="flex flex-row items-center gap-x-2"><img width="48" height="48" alt="blogzen logo" data-nuxt-img="" srcset="/_ipx/s_48x48/logo.svg 1x, /_ipx/s_96x96/logo.svg 2x" src="/_ipx/s_48x48/logo.svg"><span class="text-3xl font-bold">Blogzen</span></a>"`
    );
  });
});
