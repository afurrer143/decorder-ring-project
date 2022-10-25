// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("encoding a message", () => {
    it("should encode a message by translating each letter to number based on an encoder", () => {
      const message = "hello bob";
      const actual = polybius(message);
      const expected = "3251131343 214321";

      expect(actual).to.equal(expected);
    })

    it("should translate 'i' and 'j' to 42", () => {
      const message = "i see jam";
      const actual = polybius(message);
      const expected = "42 345151 421123";

      expect(actual).to.equal(expected);
    });

    it("should not affect spaces", () => {
      const message = "h i t h e r e";
      const actual = polybius(message);
      const expected = "32 42 44 32 51 24 51";

      expect(actual).to.equal(expected);
    });

    it("should default to encoding when no encoding is specified", () => {
        const message = "hello world"
        const actual = polybius(message)
        const expected = "3251131343 2543241341"

        expect(actual).to.equal(expected);
    })
})

describe("encoding a message", () => {
    it("should decode a message by translating two digits of a numbers into a letter", () => {
      const message = "23513434112251";
      const actual = polybius(message, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });

    it("should translate 42 to (i/j)", () => {
      const message = "424222221351";
      const actual = polybius(message, false);

      expect(actual).to.include("(i/j");
    });

    it("should leave spaces as is", () => {
      const message = "32 42 44 32 51 24 51";
      const actual = polybius(message, false);
      const expected = "h (i/j) t h e r e";

      expect(actual).to.equal(expected);
    });

    it("should return false if the length of all numbers is odd", () => {
      const message = "2345 235134341122514";
      const actual = polybius(message, false);

      expect(actual).to.be.false;
    });

    it("should return false if message is not properly formatted", () => {
        const message = "2 34 5 2 351 34 34 1 1 225 14";
        const actual = polybius(message, false);
  
        expect(actual).to.be.false;
      });
})