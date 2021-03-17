// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (
      // Shift error handling
      shift > 25 ||
      shift < -25 ||
      shift === 0 ||
      typeof shift === "undefined"
    ) {
      return false;
    }
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    alphabet = alphabet.split("");
    let encodedArr = [];
    if (encode) {
      // Encoding
      [...input.toLowerCase()].forEach((character) => {
        let shiftedLetter;
        // Check to see if character is found in alphabet
        const found = alphabet.find((letter) => letter === character);
        if (character === " " || !found) {
          /*  if space or special character add to decodeArr
           & move on to next the character */
          encodedArr.push(character);
          return;
        }
        // Shift letter & assign to shiftedLetter if
        if (alphabet.indexOf(character) + shift > alphabet.length - 1) {
          // If at the end go to the start of the alphabet
          shiftedLetter =
            alphabet[alphabet.indexOf(character) + shift - alphabet.length];
        } else if (alphabet.indexOf(character) + shift < 0) {
          // If shifted past the start go to the end of the alphabet
          shiftedLetter =
            alphabet[
              alphabet.length - (alphabet.indexOf(character) + shift) * -1
            ];
        } else {
          // Simply shift
          shiftedLetter = alphabet[alphabet.indexOf(character) + shift];
        }
        // Add shifted letter to encoded array
        encodedArr.push(shiftedLetter);
      });
      return encodedArr.join("");
    } else {
      // Decoding
      let decodedArr = [];
      [...input.toLowerCase()].forEach((character) => {
        let unshiftedLetter;
        // Check to see if character is found in alphabet
        const found = alphabet.find((letter) => letter === character);
        if (character === " " || !found) {
          /*  if space or special character add to decodeArr
           & move on to next the character */
          decodedArr.push(character);
          return;
        }
        // Unshift & assign to unshiftedLetter
        if (alphabet.indexOf(character) - shift > alphabet.length - 1) {
          // If at the end go to the start of the alphabet
          unshiftedLetter =
            alphabet[alphabet.indexOf(character) - shift - alphabet.length];
        } else if (alphabet.indexOf(character) - shift < 0) {
          // If shifted past the start go to the end of the alphabet
          unshiftedLetter =
            alphabet[
              alphabet.length - (alphabet.indexOf(character) - shift) * -1
            ];
        } else {
          // Unshift without worry
          unshiftedLetter = alphabet[alphabet.indexOf(character) - shift];
        }
        // Add shifted letter to encoded array
        decodedArr.push(unshiftedLetter);
      });
      return decodedArr.join("");
    }
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
