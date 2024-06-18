import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import PostList from "@@/components/post/List.vue";

describe("PostList component", () => {
  const commonOptions = {
    attrs: {
      data: [
        {
          title: "Frontend resources!",
          tldr: "A collection of frontend resources for UI creation, performance optimization, and more.",
          thumbnailUrl: "/thumbnail.webp",
          createdAt: new Date().toISOString(),
          sourceUrl: "/r/asd",
          redirectCode: "qwerty",
          tags: [
            {
              name: "javascript",
            },
            {
              name: "react",
            },
            {
              name: "css",
            },
          ],
          upvotesCount: 123,
          viewsCount: 64,
        },
        {
          title: "Frontend resources!",
          tldr: "A collection of frontend resources for UI creation, performance optimization, and more.",
          thumbnailUrl: "/thumbnail.webp",
          createdAt: new Date().toISOString(),
          sourceUrl: "/r/asd",
          redirectCode: "qwerty",
          tags: [
            {
              name: "javascript",
            },
            {
              name: "react",
            },
            {
              name: "css",
            },
          ],
          upvotesCount: 123,
          viewsCount: 64,
        },
      ],
    },
  };

  it("renders unchanged", async () => {
    const component = await mountSuspended(PostList, commonOptions);

    expect(component.html()).toMatchInlineSnapshot(
      `
      "<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8">
        <div class="card p-4 shadow-none border w-full bg-base-100">
          <figure class="rounded flex-none"><img alt="Frontend resources!" data-nuxt-img="" srcset="/_ipx/fit_fill/thumbnail.webp 1x, /_ipx/fit_fill/thumbnail.webp 2x" src="/_ipx/fit_fill/thumbnail.webp" class="w-full"></figure>
          <div class="my-4 flex-none">
            <div class="flex flex-row gap-2 mb-1">
              <div class="badge badge-secondary font-semibold rounded text-white border-none gap-2"> #javascript</div>
              <div class="badge badge-secondary font-semibold rounded text-white border-none gap-2"> #react</div>
              <div class="badge badge-secondary font-semibold rounded text-white border-none gap-2"> #css</div>
            </div><span class="text-sm text-gray-500">Tue Jun 18 2024</span>
            <h3 class="card-title line-clamp-3">Frontend resources!</h3>
            <p class="line-clamp-3 mt-1 text-gray-700">A collection of frontend resources for UI creation, performance optimization, and more.</p>
          </div>
          <div class="flex flex-col flex-1 justify-end gap-2">
            <div class="flex flex-row gap-2">
              <div class="btn btn-sm flex-1 btn-ghost bg-gray-100 hover:bg-gray-100 hover:bg-gray-200"><svg data-v-f2edb3ec="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon text-primary" width="1em" height="1em" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12H5.414a1 1 0 0 1-.707-1.707l6.586-6.586a1 1 0 0 1 1.414 0l6.586 6.586A1 1 0 0 1 18.586 12H15v6H9zm0 9h6"></path>
                </svg> 123</div>
              <div class="btn btn-sm flex-1 btn-ghost bg-gray-100 hover:bg-gray-100 no-animation"><svg data-v-f2edb3ec="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon text-primary" width="1em" height="1em" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></path>
                    <path d="M21 12q-3.6 6-9 6t-9-6q3.6-6 9-6t9 6"></path>
                  </g>
                </svg> 64</div>
            </div><a href="/api/redirect/qwerty"><button class="btn w-full btn-sm bg-black text-white hover:bg-black/80 bg-black"> Read post <svg data-v-f2edb3ec="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon" width="1em" height="1em" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5"></path>
                </svg></button></a>
          </div>
        </div>
        <div class="card p-4 shadow-none border w-full bg-base-100">
          <figure class="rounded flex-none"><img alt="Frontend resources!" data-nuxt-img="" srcset="/_ipx/fit_fill/thumbnail.webp 1x, /_ipx/fit_fill/thumbnail.webp 2x" src="/_ipx/fit_fill/thumbnail.webp" class="w-full"></figure>
          <div class="my-4 flex-none">
            <div class="flex flex-row gap-2 mb-1">
              <div class="badge badge-secondary font-semibold rounded text-white border-none gap-2"> #javascript</div>
              <div class="badge badge-secondary font-semibold rounded text-white border-none gap-2"> #react</div>
              <div class="badge badge-secondary font-semibold rounded text-white border-none gap-2"> #css</div>
            </div><span class="text-sm text-gray-500">Tue Jun 18 2024</span>
            <h3 class="card-title line-clamp-3">Frontend resources!</h3>
            <p class="line-clamp-3 mt-1 text-gray-700">A collection of frontend resources for UI creation, performance optimization, and more.</p>
          </div>
          <div class="flex flex-col flex-1 justify-end gap-2">
            <div class="flex flex-row gap-2">
              <div class="btn btn-sm flex-1 btn-ghost bg-gray-100 hover:bg-gray-100 hover:bg-gray-200"><svg data-v-f2edb3ec="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon text-primary" width="1em" height="1em" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12H5.414a1 1 0 0 1-.707-1.707l6.586-6.586a1 1 0 0 1 1.414 0l6.586 6.586A1 1 0 0 1 18.586 12H15v6H9zm0 9h6"></path>
                </svg> 123</div>
              <div class="btn btn-sm flex-1 btn-ghost bg-gray-100 hover:bg-gray-100 no-animation"><svg data-v-f2edb3ec="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon text-primary" width="1em" height="1em" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></path>
                    <path d="M21 12q-3.6 6-9 6t-9-6q3.6-6 9-6t9 6"></path>
                  </g>
                </svg> 64</div>
            </div><a href="/api/redirect/qwerty"><button class="btn w-full btn-sm bg-black text-white hover:bg-black/80 bg-black"> Read post <svg data-v-f2edb3ec="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon" width="1em" height="1em" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5"></path>
                </svg></button></a>
          </div>
        </div>
      </div>"
    `
    );
  });
});
