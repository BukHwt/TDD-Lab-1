"use strict";

// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// const translate = (string) => {
//   let newString = "";
//   let array = string.toLowerCase().split("");
//   if (vowels.indexOf(string[0]) > -1) {
//     newString = string + "way";
//     return newString.toLowerCase();
//   } else {
//     let firstMatch = string.match(/[aeiou]/gi) || 0;
//     let vowel = string.indexOf(firstMatch[0]);
//     newString = string.substring(vowel) + string.substring(0, vowel) + "ay";
//     console.log(vowel);
//     return newString.toLowerCase();
//   }
// };

// console.log(translate("bAnAnA"));

const translate = (word) => {
  word = word.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  if (vowels.includes(word[0])) {
    return word + "way";
  } else {
    let index = word.split("").findIndex((letter) => vowels.includes(letter));
    return word.slice(index) + word.slice(0, index) + "ay";
    // word.slice(index) starts the word at the index where a vowel has been identified
    // word.slice(0,index) returns the part of the string that is from the first letter to the index where a vowel was matched and places it at the end
  }
};

module.exports = { translate };
