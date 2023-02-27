# decorder-ring-project from Thinkful

## By Andrew Furrer

This program allows users to decode coded messages using a variety of different encoding methods. The program supports the following encoding methods:

+ Caesar cipher: a simple substitution cipher in which each letter in the plaintext is shifted a certain number of places down the alphabet.
+ Polybius square: a method of encoding pairs of letters as two-digit numbers using a 5x5 grid.
+ Substitution cipher: a more complex substitution cipher in which each letter in the plaintext is replaced with a different letter or symbol.

With a heavy focus on Test Driven Development

## Caesar ()

![Caesar shift example image](https://i.gyazo.com/9929f55b180d1de03f18b0b0ad87e7f3.png)

Takes the value of a letter (EX: A = 0, B = 1...etc) and adds a user inputted number along side to transform each letter in a messages

While the decoding for it takes it in the opposite direction to decode messages

## Polybius ()

![Polybius square example image](https://i.gyazo.com/749c15280c0cc50bc3caa86a8df2a91d.png)

Using a custom polybius square translate individual letters in a message to numbers based on the polybius value (EX: A = 11, F = 12...etc)

Decoding taking the process and checking values and cross referencing with the polybius square to turn two digit numbers into letters

## Substituion ()

![Substitution cipher example](https://i.gyazo.com/bfe443cb0181f07c8564c0833ae99169.png)

With a user inputted message, and a user inputted Substituion alphabet swapping letters based on the index real alphabet and using that info into the user inputted alphabet

Decoding working in reverse, taking the index of letters in user inputted alphabet, and using its index in the actual alphabet

## Requirements

Node.js v12 or higher

## Installation and Setup

1. Clone this repository to your local machine.
2. Install the required dependencies by running npm install in the root directory of the project.
3. Start the application by running npm start. The application should now be accessible at http://localhost:3000.

## Contributing

If you would like to contribute to this project, please feel free to fork the repository and submit a pull request. All contributions are welcome!