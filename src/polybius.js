// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function polybius(input, encode = true) {
    // create dictionary for decoding
    input = input.toLowerCase();
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const toFive = ["1", "2", "3", "4", "5"];
    let code = [];
    toFive.forEach((col) => {
      toFive.forEach((row) => {
        if (row + col === "42") {
          code.push("42", "42");
        } else {
          code.push(row + col);
        }
      });
    });
    const polyKey = {};
    alphabet.forEach((letter, index) => (polyKey[letter] = code[index]));
    // Dictionary for decoding created

    if (encode) {
      // Encode input based on dictionary
      let result = "";
      for (const letter of input) {
        if (letter != " ") {
          result += polyKey[letter];
        } else {
          result += letter;
        }
      }
      return result;
    } else {
      // Decode input
      if (input.replace(/ /g, "").length % 2 != 0) {
        /* Return false if the length of input minus the spaces is odd
        because we decode #s in pairs */
        return false;
      }
      let result = "";
      // Split into words
      input = input.split(" ");
      // Split input into pairs of strings
      let codePairs = input.map((string) => string.match(/.{1,2}/g));
      let wrdCount = 1;
      codePairs.forEach((word) => {
        word.forEach((num) => {
          if (num === "42") {
            result += "(i/j)";
          } else {
            // Decrypt letter & add to result
            result += Object.keys(polyKey).find((key) => polyKey[key] === num);
          }
        });
        if (codePairs.length > wrdCount) {
          // If its not the last word add a space between the words
          result += " ";
          wrdCount++;
        }
      });
      return result;
    }
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
