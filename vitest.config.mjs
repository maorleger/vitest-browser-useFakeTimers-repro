import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    browser: {
      enabled: true,
      headless: false,
      name: "chromium",
      provider: "playwright",
    },
    fakeTimers: {
      toFake: ["setTimeout"],
    },
  },
});
