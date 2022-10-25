// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  //Easting thing is make an object with the key being a letter, the property being its coded value
  //Like { "a" : "11", "b": "21"}
  //I/J decoding will be weird. Probably have an if statement specifically for I/J value and return (i/j)
  const encoder = {
    a: "11",
    b: "21",
    c: "31",
    d: "41",
    e: "51",
    f: "12",
    g: "22",
    h: "32",
    i: "42",
    j: "42",
    k: "52",
    l: "13",
    m: "23",
    n: "33",
    o: "43",
    p: "53",
    q: "14",
    r: "24",
    s: "34",
    t: "44",
    u: "54",
    v: "15",
    w: "25",
    x: "35",
    y: "45",
    z: "55",
  };

  const decoder = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };

  function polybius(input = "", encode = true) {
    // your solution code here

    input = input.toLowerCase(); //ignore any capital letters
    let inputArray = input.split(" "); //this turns each word in the message to an index in an array
    //console.log(inputArray); // EX: ["hello", "world"] or ["2345", "23513434112251"]
    let result = "";
    let codeTable = encoder //default codeTable will use encoder
    if (!encode) {
      //Aka we are decoding
      if (input.replace(/\s/g, '').length % 2 == 1) { 
        //This sees if a decoding message with no spaces at all is odd. If odd it returns false since that is not a proper formatted code to decode
        return false;
      }
      codeTable = decoder; //sets the codeTable to use decoder instead
    }
    for (let i = 0; i < inputArray.length; i++) {
      //loops through each word in the array individually
      let wordArray = [];
      let currentIndex = inputArray[i]; //current index in this case being the word
      // console.log(`~~~~~~~~~~~CURRENT INDEX IS~~~~~~~~`)
      // console.log(currentIndex)
      for (let j = 0; j < currentIndex.length; j++) {
        //Loops through each letter in a word
        let currentLetter //just declaring here so it can be used outside the if statement below's scope
        if (!encode) {
          currentLetter = currentIndex[j] + currentIndex[j + 1] //so when decoding we need two digits
          j++ //and we also need to add one to jindex (other wise first "letter" would be 21, then second "letter" would use that 1 in the first letter)
        } else {
        currentLetter = currentIndex[j]; //on encoding just need each digit
        }
        // console.log(`~~~~~~~~~~~CURRENT LETTER IS~~~~~~~~`)
        // console.log(currentLetter)
        codedLetter = codeTable[currentLetter];
        if (!codedLetter) {
          //if coded letter is not found, throw false to give an error on the website
          return false;
        } else {
          // console.log(`~~~~~~~~~~~CODED LETTER IS~~~~~~~~~~~`)
          // console.log(codedLetter)
          wordArray.push(codedLetter); //puts the coded letter in (current) wordArray
        } 
      }
      // console.log(`~~~~~~~~~~WORD ARRAY IS~~~~~~~~~`)
      // console.log(wordArray)
      result += `${wordArray.join("")} `; //This simply takes the wordArray, flattenes it into a string and adds that to result (with a space at the end)
    }
    // console.log(`~~~~~~~~~~~~~~~~~~~result Array is~~~~~~~~~~~~~~~~~~~`);
    console.log(result);
    return result.trim(); //removes spaces add end and front

    //when encode is false, aka DECODE

    //I need a way to get the TWO numbers together, but ignore spaces while also remembering where spaces are
    //So i cant just do a for loop and increment I +2 then have current number be [i] + [i + 1]. Since if there is a space in the message some numbers will be 1 number and a space
    //technically Qualified isnt testing for that so i can do that technically BUT there are still real cases where i pass the if trim % 2 statement but it is not formatted right EX: "2 2 " would pass the .trim but that isnt properly formatted
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
