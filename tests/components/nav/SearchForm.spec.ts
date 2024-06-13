import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import SearchForm from "@@/components/nav/SearchForm.vue";

describe("SearchForm component", () => {
  it("renders unchanged", async () => {
    const component = await mountSuspended(SearchForm);

    expect(component.html()).toMatchInlineSnapshot(
      `"<form class="" autocomplete="off"><label class="input input-bordered flex items-center gap-2"><input type="search" class="grow" placeholder="What do you search?" name="searchQuery"><kbd class="kbd kbd-sm">Ctrl</kbd><kbd class="kbd kbd-sm">K</kbd></label></form>"`
    );
  });
});
