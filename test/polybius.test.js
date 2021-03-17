const { expect } = require("chai");
const polybius = require("../src/polybius");

// Write your tests here!
describe("Additional polybius() Tests", function () {
  it("Should encode capitol words", function () {
    const actual = polybius("HELLO WORLD");
    const expected = "3251131343 2543241341";
    expect(actual).to.equal(expected);
  });

  it("Should decode", function () {
    const actual = polybius("4432423352125413", false);
    const expected = "th(i/j)nkful";
    expect(actual).to.equal(expected);
  });
});
