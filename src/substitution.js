// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  //A good way to see if the alphabet user inputted doesnt repeat letter is using set like this
  /*
      const numbers = [1, 2, 3, 2, 4, 5, 5, 6];

    const unique = Array.from(new Set(numbers));

    if(numbers.length === unique.length) {
        console.log(`Array doesn't contain duplicates.`);
    } else {
        console.log(`Array contains duplicates.`);
    }
  */
  function substitution(input, alphabet, encode = true) {
    // your solution code here
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
