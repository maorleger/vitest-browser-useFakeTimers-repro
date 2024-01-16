import { describe, it, vi } from "vitest";
describe("repro", () => {
  it("should work", () => {
    vi.useFakeTimers();
  });
});
