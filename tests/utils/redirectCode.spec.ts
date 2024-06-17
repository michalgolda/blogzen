import { describe, it, expect } from "vitest";
import { generateRedirectCode } from "@@/utils/redirectCode";

describe("generateRedirectCode utitlity function", () => {
  it("generated redirect code should be 6 characters long", () => {
    const code = generateRedirectCode("https://example.com", new Date());

    expect(code.length).toBe(6);
  });
});
