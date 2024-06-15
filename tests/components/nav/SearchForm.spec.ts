import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import SearchForm from "@@/components/nav/SearchForm.vue";

describe("SearchForm component", () => {
  it("renders unchanged", async () => {
    const component = await mountSuspended(SearchForm);

    expect(component.html()).toMatchInlineSnapshot(
      `"<form autocomplete="off"><label class="input flex items-center gap-2"><input type="search" placeholder="What do you search?" name="searchQuery"><kbd class="kbd kbd-sm border-gray-300 bg-gray">Ctrl</kbd><kbd class="kbd kbd-sm border-gray-300 bg-gray">K</kbd></label></form>"`
    );
  });
});
