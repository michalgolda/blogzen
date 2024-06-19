import { describe, it, expect, vi } from "vitest";
import { mountSuspended, mockNuxtImport } from "@nuxt/test-utils/runtime";
import Nav from "@@/components/nav/index.vue";

const signOutMock = vi.fn().mockImplementation(() => new Promise(() => {}));
const openModalMock = vi.fn();

mockNuxtImport("useClientSideSupabaseClient", () => () => ({
  auth: {
    signOut: signOutMock,
  },
}));

mockNuxtImport("usePostCreateModal", () => () => ({
  open: openModalMock,
}));

describe("Nav component", () => {
  const commonOptions = {
    attrs: {
      userEmail: "user@example.com",
    },
  };

  it("ensure open create post modal button handler works properly", async () => {
    const component = await mountSuspended(Nav, commonOptions);

    const createPostButton = component.find("button[aria-label='create-post']");

    expect(createPostButton.exists()).toBeTruthy();

    createPostButton.trigger("click");

    expect(openModalMock).toHaveBeenCalled();
  });

  it("ensure logout button handler works properly", async () => {
    const component = await mountSuspended(Nav, commonOptions);

    const logoutButton = component.find("button[aria-label='logout']");

    expect(logoutButton.exists()).toBeTruthy();

    logoutButton.trigger("click");

    expect(signOutMock).toHaveBeenCalled();
  });

  it("renders unchanged with unauthenticated state", async () => {
    const component = await mountSuspended(Nav, {
      ...commonOptions,
      attrs: {
        ...commonOptions.attrs,
        userEmail: null,
      },
    });

    expect(component.html()).toMatchInlineSnapshot(`
      "<nav class="bg-base-100 border-b">
        <div class="navbar container p-4 mx-auto">
          <div class="flex-none"><a href="/" class="flex flex-row items-center gap-x-2"><img width="48" height="48" alt="blogzen logo" data-nuxt-img="" srcset="/_ipx/s_48x48/logo.svg 1x, /_ipx/s_96x96/logo.svg 2x" src="/_ipx/s_48x48/logo.svg"><span class="text-3xl font-bold">Blogzen</span></a></div>
          <div class="flex-1 ml-8">
            <form autocomplete="off"><label class="input flex items-center gap-2"><input type="search" placeholder="What do you search?" name="searchQuery"><kbd class="kbd kbd-sm border-gray-300 bg-gray">Ctrl</kbd><kbd class="kbd kbd-sm border-gray-300 bg-gray">K</kbd></label></form>
          </div>
          <div class="flex flex-row gap-x-2"><a href="/auth/signin"><button class="btn btn-primary btn-outline">Sign in</button></a><a href="/auth/signup"><button class="btn btn-primary btn">Sign up</button></a></div>
        </div>
      </nav>"
    `);
  });

  it("renders unchanged with authenticated state", async () => {
    const component = await mountSuspended(Nav, commonOptions);

    expect(component.html()).toMatchInlineSnapshot(
      `
      "<nav class="bg-base-100 border-b">
        <div class="navbar container p-4 mx-auto">
          <div class="flex-none"><a href="/" class="flex flex-row items-center gap-x-2"><img width="48" height="48" alt="blogzen logo" data-nuxt-img="" srcset="/_ipx/s_48x48/logo.svg 1x, /_ipx/s_96x96/logo.svg 2x" src="/_ipx/s_48x48/logo.svg"><span class="text-3xl font-bold">Blogzen</span></a></div>
          <div class="flex-1 ml-8">
            <form autocomplete="off"><label class="input flex items-center gap-2"><input type="search" placeholder="What do you search?" name="searchQuery"><kbd class="kbd kbd-sm border-gray-300 bg-gray">Ctrl</kbd><kbd class="kbd kbd-sm border-gray-300 bg-gray">K</kbd></label></form>
          </div>
          <div class="flex flex-row gap-x-2">
            <div class="flex flex-row gap-x-2 items-center"><button class="btn btn-primary mr-2" aria-label="create-post"><svg data-v-f2edb3ec="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon" width="1em" height="1em" viewBox="0 0 256 256">
                  <path fill="currentColor" d="M228 128a12 12 0 0 1-12 12h-76v76a12 12 0 0 1-24 0v-76H40a12 12 0 0 1 0-24h76V40a12 12 0 0 1 24 0v76h76a12 12 0 0 1 12 12"></path>
                </svg> Create new post </button>
              <div class="avatar placeholder">
                <div class="bg-black text-white rounded-full w-12"><span class="text-sm">U</span></div>
              </div><span>user@example.com</span><button aria-label="logout" class="btn btn-ghost btn-sm bg-gray-300 btn-square hover:bg-gray-300/80"><svg data-v-f2edb3ec="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon" width="1em" height="1em" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2">
                    <path stroke-dasharray="32" stroke-dashoffset="32" d="M12 4H5C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H12">
                      <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0"></animate>
                    </path>
                    <path stroke-dasharray="12" stroke-dashoffset="12" d="M9 12h11.5" opacity="0">
                      <set attributeName="opacity" begin="0.5s" to="1"></set>
                      <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="12;0"></animate>
                    </path>
                    <path stroke-dasharray="6" stroke-dashoffset="6" d="M20.5 12l-3.5 -3.5M20.5 12l-3.5 3.5" opacity="0">
                      <set attributeName="opacity" begin="0.7s" to="1"></set>
                      <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="6;0"></animate>
                    </path>
                  </g>
                </svg></button>
            </div>
          </div>
        </div>
      </nav>"
    `
    );
  });
});
