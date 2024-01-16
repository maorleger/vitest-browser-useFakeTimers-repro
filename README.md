# Minimal repro of an issue found in vi.useFakeTimers

When using vi.useFakeTimers to fake `setTimeout`, 1.2.x throws `process is not defined` errors. I _think_ this was introduced in [#4441](https://github.com/vitest-dev/vitest/pull/4441/files) which standardized to using a [isChildProcess](https://github.com/vitest-dev/vitest/pull/4441/files#diff-151cb4f9e52fa755205f26dfd60741bd1eb6b47cbcbfc818b9400e695a87912cR154) helper function instead of various checks against `globalThis.__vitest_worker__.isChildProcess`.

## To repro

```
npm install
npm run test
```

Expected: the test passes

Actual: `ReferenceError: process is not defined`

Note that the first commit in this repo [abe06c7](https://github.com/maorleger/vitest-browser-useFakeTimers-repro/commit/abe06c7fb3ea4306669b6b713c34504693b69f33) passes when using 1.1.x
