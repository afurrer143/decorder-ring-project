// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() testing", () => {
  describe("It should return false if shift is 0, above 25, or less than 25", () => {
    const message = "A";
    let shift = 0;
    it("Should return false if shift is 0", () => {
      shift = 0;
      const actual = caesar(message, shift);
      expect(actual).to.be.false;
    });
    it("Should return false if shift is above 25", () => {
      shift = 26;
      const actual = caesar(message, shift);
      expect(actual).to.be.false;
    });
    it("Should return false if shift is below 25", () => {
      shift = -27;
      const actual = caesar(message, shift);
      expect(actual).to.be.false;
    });
  });


  describe("Encoding a message", () => {
    it("should encode a message by shifting the letters appropiately", () => {
        const message = "message";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "phvvdjh";
  
        expect(actual).to.equal(expected);
      });
  })
});
