// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() should return false test", () => {
    it("should return false if the substitution alphabet not inputted", () => {
        const message = "message";
        const actual = substitution(message);
        expect(actual).to.be.false;
      });

      it("should return false when the substitution alphabet is not 26 characters", () => {
        const message = "message";
        const alphabet = "short";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
      });

      it("should return false if the substitution alphabet does not contain unique characters", () => {
        const message = "message";
        const alphabet = "abcabcabcabcabcabcabcabcab";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
      });
})

describe("encoding a message", () => {
    it("should encode a message by using the given substitution alphabet", () => {
        const message = "hello";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(message, alphabet);
        const expected = "jkvvc";
  
        expect(actual).to.equal(expected);
      });

      it("should work with any kind of key with unique characters", () => {
        const message = "message";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet);
        const expected = "ysii.rs";
  
        expect(actual).to.equal(expected);
      });

      it("should preserve spaces", () => {
        const message = "hello there world";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet);
        const expected = "dsccv jdsbs kvbce";
  
        expect(actual).to.equal(expected);
      });
})

describe("decoding a message", () => {
    it("should decode a message by using the given substitution alphabet", () => {
      const message = "ykrrpik";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(message, alphabet, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });

    it("should work with any kind of characters", () => {
        const message = "ysii.rs";
        const alphabet = ".waeszrdxtfcygvuhbij5okmpl";
        const actual = substitution(message, alphabet, false);
        const expected = "message";
  
        expect(actual).to.equal(expected);
      });

      it("should preserve spaces", () => {
        const message = "yp ys ii.rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet, false);
        const expected = "my me ssage";
  
        expect(actual).to.equal(expected);
      });
})