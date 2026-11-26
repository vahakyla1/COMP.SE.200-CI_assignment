import { expect } from "chai";
import words from "../words.js";

describe("Search keyword splitting tests (words.js)", function () {
  it("WORDS-001: should split a simple string into words", function () {
    const result = words("Apple Juice");

    expect(result).to.deep.equal(["Apple", "Juice"]);
  });

  it("WORDS-002: should ignore punctuation by default", function () {
    const result = words("Apple, flour & milk");

    expect(result).to.deep.equal(["Apple", "flour", "milk"]);
  });

  it("WORDS-003: should split camelCase and alphanumeric strings", function () {
    const result = words("freshBread2");

    expect(result).to.deep.equal(["fresh", "Bread", "2"]);
  });

  it("WORDS-004: should split words using a custom pattern", function () {
    const result = words("Apple, flour, & milk", /[^, ]+/g);

    expect(result).to.deep.equal(["Apple", "flour", "&", "milk"]);
  });

  it("WORDS-005: should return an empty array for empty or whitespace strings", function () {
    expect(words("")).to.deep.equal([]);
    expect(words("   ")).to.deep.equal([]);
  });

  it("WORDS-006: should return an empty array when custom pattern has no match", function () {
    const result = words("Apple Juice", /xyz/g);

    expect(result).to.deep.equal([]);
  });
});