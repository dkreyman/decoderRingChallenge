// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function substitution(input, alphabet, encode = true) {
    if (
      // Error handling alphabet
      !alphabet ||
      alphabet.length !== 26 ||
      // No duplicate characters allowed in alphabet
      new Set(alphabet).size !== alphabet.length
    ) {
      return false;
    }
    if (encode) {
      input = input.toLowerCase();
      // No special characters in input allowed
      if (/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(input)) {
        return false;
      }
    }
    // create dictionary for decoding
    const english = "abcdefghijklmnopqrstuvwxyz".split("");
    const polyKey = {};
    english.forEach((letter, index) => (polyKey[letter] = alphabet[index]));
    //Dictionary for decoding created
    if (encode) {
      // Encode input based on dictionary
      let result = "";
      for (const letter of input) {
        if (letter != " ") {
          result += polyKey[letter];
        } else {
          result += " ";
        }
      }
      return result;
    } else {
      // Decode input
      let result = "";
      let letters = input.split("");
      letters.forEach((num) => {
        if (num === " ") {
          // Preserve spaces
          result += " ";
        } else {
          // Decrypt letter & add to result
          result += Object.keys(polyKey).find((key) => polyKey[key] === num);
        }
      });
      return result;
    }
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
