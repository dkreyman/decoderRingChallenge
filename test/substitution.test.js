// Write your tests here!
const { expect } = require("chai");
const substitution = require("../src/substitution");

describe("Additional substitution() Tests", function () {
  it("Should encode", function () {
    const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    const expected = "y&ii$r&";
    expect(actual).to.be.a("string");
    expect(actual).to.equal(expected);
  });

  it("Should decode", function () {
    const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    const expected = "message";
    expect(actual).to.be.a("string");
    expect(actual).to.equal(expected);
  });
});
