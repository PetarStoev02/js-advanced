const { expect } = require("chai");
const { isSymmetric } = require("./05. Check for Symmetry");

describe("Symmetry Cheker", () => {
  it("works with symmetric numeric array", () => {
    expect(isSymmetric([1, 2, 2, 1])).to.be.true;
  });

  it("return false for non-symmetric arrays", () => {
    expect(isSymmetric([1, 2, 3])).to.be.false;
  });

  it("return false for non-arrays", () => {
    expect(isSymmetric(3)).to.be.false;
  });

  it("works with symmetric odd-length arrays", () => {
    expect(isSymmetric([1, 2, 1])).to.be.true;
  });

  it("return false for string param", () => {
    expect(isSymmetric(["abba"])).to.be.false;
  });

  it("return false for type mismached elements", () => {
    expect(isSymmetric([1, 2, "1"])).to.be.false;
  });
});
