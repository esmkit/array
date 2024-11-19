# @esmkit/array

Immutable Array prototype methods.

## Features

- 🚀 **High Performance**: optimized for performance.
- 📦 **Small Bundle Size**: small bundle size.
- 🎯 **Strong Type Annotations**: written in TypeScript with full types support.

## Installation

```bash
npm install @esmkit/array
bun add @esmkit/array
```

## Usage

Basically, the usage of these method is same with mutable version.

```js
import { sort, unshift, push, fill, splice, pop, reverse, copyWithin, shift } from "@esmkit/array";

describe("prototype", () => {
  it("shift", () => {
    assert.deepStrictEqual(shift(["a", "b", "c", "d", "e"]), ["b", "c", "d", "e"]);
  });
  it("unshift", () => {
    assert.deepStrictEqual(unshift(["a", "b", "c", "d", "e"], "x"), ["x", "a", "b", "c", "d", "e"]);
  });
  it("pop", () => {
    assert.deepStrictEqual(pop(["a", "b", "c", "d", "e"]), ["a", "b", "c", "d"]);
  });
  it("push", () => {
    assert.deepStrictEqual(push(["a", "b", "c", "d", "e"], "x"), ["a", "b", "c", "d", "e", "x"]);
  });
  it("splice", () => {
    assert.deepStrictEqual(splice(["a", "b", "c", "d", "e"], 0, 1, "x"), ["x", "b", "c", "d", "e"]);
  });
  it("sort", () => {
    assert.deepStrictEqual(sort(["e", "a", "c", "b", "d"]), ["a", "b", "c", "d", "e"]);
  });
  it("reverse", () => {
    assert.deepStrictEqual(reverse(["a", "b", "c", "d", "e"]), ["e", "d", "c", "b", "a"]);
  });
  it("fill", () => {
    assert.deepStrictEqual(fill(new Array(5), "x"), ["x", "x", "x", "x", "x"]);
  });
  it("copyWithin", () => {
    assert.deepStrictEqual(copyWithin(["a", "b", "c", "d", "e"], 0, 3, 4), ["d", "b", "c", "d", "e"]);
  });
});
```

## License

MIT © BILLGO.ME & Viva Republica, Inc & azu
