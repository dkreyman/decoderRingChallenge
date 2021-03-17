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

  it("Should encode with capitols in alphabet", function () {
    const actual = substitution(
      "Tacos are great",
      "ABCDE%GHI*K$MNO)QRST&VWX@Z"
    );
    const expected = "TACOS ARE GREAT";
    expect(actual).to.be.a("string");
    expect(actual).to.equal(expected);
  });

  it("Should decode with capitols in alphabet", function () {
    const actual = substitution(
      "TACOS ARE GREAT",
      "ABCDE%GHI*K$MNO)QRST&VWX@Z",
      false
    );
    const expected = "tacos are great";
    expect(actual).to.be.a("string");
    expect(actual).to.equal(expected);
  });

  it("Should not allow special characters when encoding", function () {
    const actual = substitution(
      "I'm speci@l though!",
      "ABCDE%GHI*K$MNO)QRST&VWX@Z"
    );
    const expected = false;
    expect(actual).to.equal(expected);
  });
});
