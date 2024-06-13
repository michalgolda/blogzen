import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Nav from "@@/components/nav/index.vue";

describe("Nav component", () => {
  it("renders unchanged", async () => {
    const component = await mountSuspended(Nav);

    expect(component.html()).toMatchInlineSnapshot(
      `
      "<nav class="bg-base-100">
        <div class="navbar container mx-auto">
          <div class="flex-none"><a href="/" class="flex flex-row items-center gap-x-2"><img width="48" height="48" alt="blogzen logo" data-nuxt-img="" srcset="/_ipx/s_48x48/logo.svg 1x, /_ipx/s_96x96/logo.svg 2x" src="/_ipx/s_48x48/logo.svg"><span class="text-3xl font-bold">Blogzen</span></a></div>
          <div class="flex-1 ml-8">
            <form class="" autocomplete="off"><label class="input input-bordered flex items-center gap-2"><input type="search" class="grow" placeholder="What do you search?" name="searchQuery"><kbd class="kbd kbd-sm">Ctrl</kbd><kbd class="kbd kbd-sm">K</kbd></label></form>
          </div>
          <div class="flex flex-row gap-x-2"><button class="btn btn-primary"><svg data-v-1a166b3b="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon" width="1em" height="1em" viewBox="0 0 256 256">
                <path fill="currentColor" d="M228 128a12 12 0 0 1-12 12h-76v76a12 12 0 0 1-24 0v-76H40a12 12 0 0 1 0-24h76V40a12 12 0 0 1 24 0v76h76a12 12 0 0 1 12 12"></path>
              </svg> Create new post </button></div>
        </div>
      </nav>"
    `
    );
  });
});
