import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Nav from "@@/components/nav/index.vue";

describe("Nav component", () => {
  it("renders unchanged", async () => {
    const component = await mountSuspended(Nav);

    expect(component.html()).toMatchInlineSnapshot(
      `
      "<nav class="bg-base-100 border-b">
        <div class="navbar container p-4 mx-auto">
          <div class="flex-none"><a href="/" class="flex flex-row items-center gap-x-2"><img width="48" height="48" alt="blogzen logo" data-nuxt-img="" srcset="/_ipx/s_48x48/logo.svg 1x, /_ipx/s_96x96/logo.svg 2x" src="/_ipx/s_48x48/logo.svg"><span class="text-3xl font-bold">Blogzen</span></a></div>
          <div class="flex-1 ml-8">
            <form autocomplete="off"><label class="input input-bordered border-gray-300 flex focus-within:outline-none items-center gap-2"><input class="grow" type="search" placeholder="What do you search?" name="searchQuery"><kbd class="kbd kbd-sm border-gray-300 bg-gray">Ctrl</kbd><kbd class="kbd kbd-sm border-gray-300 bg-gray">K</kbd></label></form>
          </div>
          <div class="flex flex-row gap-x-2"><button class="btn btn-primary"><span data-v-f2edb3ec="" class="icon" style="font-size: 1em; line-height: 1em; width: 1em; height: 1em;">ph:plus-bold</span> Create new post </button></div>
        </div>
      </nav>"
    `
    );
  });
});
