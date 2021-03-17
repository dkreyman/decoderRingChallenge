// Write your tests here!
const { expect } = require("chai");
const caesar = require("../src/caesar.js");

// Write your tests here!
describe("Caesar() Tests", function () {
  it("Should encode with positive #", function () {
    const actual = caesar("thinkful", 3);
    const expected = "wklqnixo";
    expect(actual).to.be.a("string");
    expect(actual).to.equal(expected);
  });

  it("Should encode with a negative #", function () {
    const actual = caesar("thinkful!a", -3);
    const expected = "qefkhcri!x";
    expect(actual).to.be.a("string");
    expect(actual).to.equal(expected);
  });

  it("Should decode", function () {
    const actual = caesar("wklqnixo", 3, false);
    const expected = "thinkful";
    expect(actual).to.be.a("string");
    expect(actual).to.equal(expected);
  });

  it("Special character should remain the same", function () {
    const actual = caesar("$$$This is a secret message!", 8);
    const expected = "$$$bpqa qa i amkzmb umaaiom!";
    expect(actual).to.equal(expected);
  });

  it("Special character should decode", function () {
    const actual = caesar("$BPQA qa I amkzmb umaaiom!", 8, false);
    const expected = "$this is a secret message!";
    expect(actual).to.equal(expected);
  });

  it("Shift cannot be undefined", function () {
    const actual = caesar("thinkful");
    const expected = false;
    expect(actual).to.equal(expected);
  });

  it("Cannot shift more than 25", function () {
    const actual = caesar("thinkful", 26);
    const expected = false;
    expect(actual).to.equal(expected);
  });

  it("Cannot shift less than -25", function () {
    const actual = caesar("thinkful", -26);
    const expected = false;
    expect(actual).to.equal(expected);
  });

  it("Cannot shift cannot equal 0", function () {
    const actual = caesar("thinkful", 0);
    const expected = false;
    expect(actual).to.equal(expected);
  });
});
