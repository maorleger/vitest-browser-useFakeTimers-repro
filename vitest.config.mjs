import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    watch: false,
    browser: {
      enabled: true,
      headless: true,
      name: "chromium",
      provider: "playwright",
    },
    fakeTimers: {
      toFake: ["setTimeout"],
    },
  },
});
