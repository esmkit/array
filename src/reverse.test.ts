import { describe, it } from "bun:test";
import * as assert from "node:assert";
import { reverse } from "./reverse";

describe("reverse", () => {
  it("should return immutable array", () => {
    const originalArray = ["a", "b", "c", "d", "e"];
    const resultArray = reverse(originalArray);
    assert.ok(originalArray !== resultArray);
  });

  it("can reverse empty array", () => {
    assert.deepStrictEqual(reverse([]), []);
  });

  it("should be idempotent - x() === x()", () => {
    const originalArray = ["a", "b", "c", "d", "e"];
    assert.deepStrictEqual(reverse(originalArray), reverse(originalArray));
  });

  it("should reverse about same value", () => {
    const a = {};
    const b = {};
    assert.deepStrictEqual(reverse([a, b]), [b, a]);
  });

  it("should reverse order the array.", () => {
    assert.deepStrictEqual(reverse(["a", "b", "c", "d", "e"]), ["e", "d", "c", "b", "a"]);
    assert.deepStrictEqual(reverse([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
    assert.deepStrictEqual(reverse([true, Number.POSITIVE_INFINITY, undefined, undefined, "NaN", "-1"]), ["-1", "NaN", undefined, undefined, Number.POSITIVE_INFINITY, true]);
  });
});
