import { describe, expect, it } from "bun:test";
import { chunk } from "./chunk";

describe("chunk", () => {
  it("should return an empty array when the input array is empty", () => {
    expect(chunk([], 3)).toEqual([]);
  });

  it("should throw if the size is not an integer of is less than 1", () => {
    expect(() => chunk([1, 2, 3], 0)).toThrow(`Size must be an integer greater than zero.`);
    expect(() => chunk([1, 2, 3], -1)).toThrow(`Size must be an integer greater than zero.`);
    expect(() => chunk([1, 2, 3], 0.5)).toThrow(`Size must be an integer greater than zero.`);
    expect(() => chunk([1, 2, 3], Math.PI)).toThrow(`Size must be an integer greater than zero.`);
  });

  it("should evenly divide all elements into chunks of the specified size when the total length is a multiple of the size", () => {
    expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
  });

  it("should place the remaining elements in the last chunk when the total length is not a multiple of the size", () => {
    expect(chunk([1, 2, 3, 4], 6)).toEqual([[1, 2, 3, 4]]);
    expect(chunk([1, 2, 3, 4, 5, 6, 7], 2)).toEqual([[1, 2], [3, 4], [5, 6], [7]]);
  });
});
