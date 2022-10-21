// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  //Easting thing is make an object with the key being a letter, the property being its coded value
  //Like { "a" : "11", "b": "21"}
  //I/J decoding will be weird. Probably have an if statement specifically for I/J value and return (i/j)
  const encoder = { 'a': '11', 'b': '12', 'c': '13', 'd': '14', 'e': '15', 'f': '21', 'g': '22', 'h': '23', 'i': '24', 'j': '24', 'k': '25', 'l': '31', 'm': '32', 'n': '33', 'o': '34', 'p': '35', 'q': '41', 'r': '42', 's': '43', 't': '44', 'u': '45', 'v': '51', 'w': '52', 'x': '53', 'y': '54', 'z': '55' };

  const decoder = { '11': 'a', '12': 'b', '13': 'c', '14': 'd', '15': 'e', '21': 'f', '22': 'g', '23': 'h', '24': 'i/j', '25': 'k', '31': 'l', '32': 'm', '33': 'n', '34': 'o', '35': 'p', '41': 'q', '42': 'r', '43': 's', '44': 't', '45': 'u', '51': 'v', '52': 'w', '53': 'x', '54': 'y', '55': 'z' };


  function polybius(input ="", encode = true) {
    // your solution code here
    input = "JI TESTING" //REMEMBER TO DELETE LATER
    //DELETE ABOVE LATER

    input = input.toLowerCase()
    let inputArray = input.split('') //this turns the inputted string into an array
    console.log(inputArray) //)
    let resultArray =[]
    if (encode) { //encode is true so use encode object
      for (let i=0; i< inputArray.length; i++) {
        let currentLetter = inputArray[i]
        codedLetter = encoder[currentLetter]
        console.log(codedLetter)
        if (!codedLetter) {
          resultArray.push(currentLetter)
        } else {
        resultArray.push(codedLetter)
        }
      }
      resultArray = resultArray.join("") //All coded messages are index in array, this turns them into one string
    } else { //when encode is false, aka DECODE

    }
    console.log(resultArray)
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
