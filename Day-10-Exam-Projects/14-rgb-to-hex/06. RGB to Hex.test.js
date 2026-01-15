const { expect } = require("chai");
const { rgbToHexColor } = require("./06. RGB to Hex");

describe("Symmetry Cheker", () => {
  it("return undefined for integer numbers not between 0 and 255", () => {
    expect(rgbToHexColor(255, 263, 333)).to.be.undefined;
  });

  it("return false for type mismached elements", () => {
    expect(rgbToHexColor(255, "234", 333)).to.be.undefined;
  });

  it("return black", () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
  });

  it("return white", () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
  });

  it("return #942F2F", () => {
    expect(rgbToHexColor(148, 47, 47)).to.equal("#942F2F");
  });


  it("return 15 15 15", () => {
    expect(rgbToHexColor(15, 15, 15)).to.equal("#0F0F0F");
  });

  it("return undefined for missing params", () => {
    expect(rgbToHexColor(255, 255)).to.be.undefined;
    expect(rgbToHexColor(255)).to.be.undefined;
    expect(rgbToHexColor()).to.be.undefined;
  });

});
