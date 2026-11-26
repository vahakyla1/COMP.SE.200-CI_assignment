import { expect } from "chai";
import Products from "./testData/products.js";
import isEmpty from "../isEmpty.js";

describe("Empty value validation tests (isEmpty.js)", function () {
  it("ISEMPTY-001: should validate empty and non-empty strings", function () {
    expect(isEmpty("")).to.be.true;
    expect(isEmpty(Products[3].category)).to.be.true;
    expect(isEmpty(Products[0].name)).to.be.false;
  });

  it("ISEMPTY-002: should validate empty and non-empty arrays", function () {
    expect(isEmpty([])).to.be.true;
    expect(isEmpty(Products)).to.be.false;
  });

  it("ISEMPTY-003: should validate empty and non-empty objects", function () {
    expect(isEmpty({})).to.be.true;
    expect(isEmpty(Products[0])).to.be.false;
  });

  it("ISEMPTY-004: should return true for null and undefined", function () {
    expect(isEmpty(null)).to.be.true;
    expect(isEmpty(undefined)).to.be.true;
  });

  it("ISEMPTY-005: should return true for numbers and booleans", function () {
    expect(isEmpty(0)).to.be.true;
    expect(isEmpty(3.5)).to.be.true;
    expect(isEmpty(true)).to.be.true;
    expect(isEmpty(false)).to.be.true;
  });

  it("ISEMPTY-006: should validate Map and Sets", function () {
    expect(isEmpty(new Map())).to.be.true;
    expect(isEmpty(new Map([["a", 1]]))).to.be.false;
    expect(isEmpty(new Set())).to.be.true;
    expect(isEmpty(new Set([1]))).to.be.false;
  });
});