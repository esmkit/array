import { describe, it } from "bun:test";
import * as assert from "node:assert";
import { pop } from "./pop";

describe("pop", () => {
  it("should return empty array when pop empty array", () => {
    const originalArray: any[] = [];
    const resultArray = pop(originalArray);
    assert.deepStrictEqual(resultArray, []);
  });
  it("should return popped array", () => {
    const originalArray = ["a", "b", "c", "d", "e"];
    const resultArray = pop(originalArray);
    assert.deepStrictEqual(resultArray, ["a", "b", "c", "d"]);
  });
  it("should return immutable result array", () => {
    const originalArray = ["a", "b", "c", "d", "e"];
    const resultArray = pop(originalArray);
    assert.ok(originalArray !== resultArray);
  });
  it("should be idempotent - x() === x()", () => {
    const originalArray = ["a", "b", "c", "d", "e"];
    assert.deepStrictEqual(pop(originalArray), pop(originalArray));
  });
});
