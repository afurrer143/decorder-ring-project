// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  //A good way to see if the alphabet user inputted doesnt repeat letter is using set like this
  let realAlphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  // 0    1    2    3    4    5    6    7    8    9   10   11    12   13   14   15   16   17   18   19   20   21   22   23   24  25
  ]

  function substitution(input, alphabet, encode = true) {
    if (alphabet === undefined) { //when user inputted alphabet not given, return false
      return false
    }
    
    if (alphabet.length > 26 || alphabet.length < 26) {  //when user alphabet not equal to 26, return false (for some reason !alphabet.length === 26 did not work)
      return false
    }

    const uniqueLetters = Array.from(new Set(alphabet)); //next few lines are to check if user Alphabet has no duplicates. This line gets all non duplicated index from alphabet
    if(uniqueLetters.length >26 || uniqueLetters.length < 26 ) { //if unique letter is not equal to user alphabet, that means there are duplicates so return false
      return false
    }

    input = input.toLowerCase() //get rid of capital letters
    let inputArray = input.split('') //turns the string into an array

    let indexOfAlphabet = realAlphabet   //how to properly encode a message
    let encodeAlphabet = alphabet
    if(!encode) {                          //when decoding just flip the two encoders
      indexOfAlphabet = alphabet
      encodeAlphabet = realAlphabet
    }

    let resultArray =[]
    for (let i = 0 ; i < inputArray.length; i++) {
      let currentLetter = inputArray[i] //the currentt letter in the user inputted message we are looping through ex "t" then "e"
      currentLetterIndexNum = indexOfAlphabet.indexOf(currentLetter)  
      if (currentLetterIndexNum === -1) { //when .indexOf() cant find the letter it returns a -1 AKA it is not in alphabet array like spaces
        resultArray.push(currentLetter) //auto push the thing, none modified into result array (mostly for spaces)
      } else {
        let subbedLetter = encodeAlphabet[currentLetterIndexNum]
        // console.log(`~~~~~~~~~CURERENT LETTER IS~~~~~~~~~`)
        // console.log(currentLetter)
        // console.log(`~~~~~~~~~~SUBBED LETTER IS~~~~~~~~~~`)
        // console.log(subbedLetter)
        resultArray.push(subbedLetter)
      }
    }
    // console.log(`~~~~~~~~~~~~~RESULT ARRAY IS~~~~~~~~~~`)
    // console.log(resultArray)
    return resultArray.join("")

  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
