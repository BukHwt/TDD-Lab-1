"use strict";

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

const translate = (string) => {
  let newString = "";
  let array = string.toLowerCase().split("");
  if (vowels.indexOf(string[0]) > -1) {
    newString = string + "way";
    return newString.toLowerCase();
  } else {
    let firstMatch = string.match(/[aeiou]/gi) || 0;
    let vowel = string.indexOf(firstMatch[0]);
    newString = string.substring(vowel) + string.substring(0, vowel) + "ay";
    console.log(vowel);
    return newString.toLowerCase();
  }
};

console.log(translate("bAnAnA"));

module.exports = { translate };
