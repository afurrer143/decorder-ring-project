// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {//DO NOT TOUCH

  // you can add any code you want within this function scope
  //the eastiest thing seems to be make an array of every letter
  //then I can just alphebet[index + shift] through the string basically
  //and I can use alphebet[index + shift] % 25 to get cases it goes over 25 (% is remaineder when subtracted. So 28 (which is 3 over 25), will be come 3(ya know the remained of 28 and 25))
  let alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  // 0    1    2    3    4    5    6    7    8    9   10   11    12   13   14   15   16   17   18   19   20   21   22   23   24  25
  ]
  
  function caesar(input ="", shift = 0, encode = true) {
    // your solution code here
    if (shift === 0 || Math.abs(shift) > 25)  return false    //if shift is false or great or less than 25 returns false

    if (!encode) {shift = shift*-1} 
    //if encode is false (aka decode) it just inverts the shift value

    input = input.toLowerCase()
    let inputArray = input.split('') //this turns the inputted string into an array
    let resultArray =[]
    for (let i = 0; i < inputArray.length;i++) {
      let currentLetter = inputArray[i] //the currentt letter in the user inputted message we are looping through
      //console.log(currentLetter)
      currentLetterIndexNum = alphabet.indexOf(currentLetter)  //Gets the index number of the current letter we are finding (EX: A is index 0, B index 1)
      //console.log(currentLetterIndexNum)
      if (currentLetterIndexNum === -1) { //when .indexOf() cant find the letter it returns a -1 AKA it is not in alphabet array like spaces
        resultArray.push(currentLetter)
      } else {
        let shiftedNumber = (currentLetterIndexNum + 26 + shift)%26 //We now add the shift and do remainder of 26 so if goes over, it will loop back over Needs to be 26 cause if we did the index length of 25, 25 % 25 will be 0  aka we will enver get a Z in the messages. But 26 fixes that
        //console.log(shiftedNumber)
        newLetter = alphabet[shiftedNumber]
        //console.log(newLetter)
        resultArray.push(newLetter)
      }
    }
    let message = resultArray.join("")
    console.log(message)
    return message
  }
  
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
