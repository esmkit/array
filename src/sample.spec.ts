import { describe, expect, it } from "bun:test";
import { sample } from "./sample";

describe("sample", () => {
  it("selects a random element from an array", () => {
    const arr = [1, 2, 3, 4, 5];

    expect(arr.includes(sample(arr))).toBe(true);
  });
});
