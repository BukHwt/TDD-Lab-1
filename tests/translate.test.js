"use strict";

const { translate } = require("../src/translate");

describe("translate function", () => {
  test("word that starts with vowel", () => {
    const result = translate("apple");
    expect(result).toBe("appleway");
  });
  test("uppercase word that starts with vowel", () => {
    const result = translate("Apple");
    expect(result).toBe("appleway");
  });
  test("word that starts with consent", () => {
    const result = translate("banana");
    expect(result).toBe("ananabay");
  });
  test("upper case word that starts with consent", () => {
    const result = translate("Banana");
    expect(result).toBe("ananabay");
  });
  test("camelcase consent", () => {
    const result = translate("BaNaNa");
    expect(result).toBe("ananabay");
  });
  test("camelcase vowels", () => {
    const result = translate("bAnAnA");
    expect(result).toBe("ananabay");
  });
  test("camelcase consent starting with vowel", () => {
    const result = translate("aPPLe");
    expect(result).toBe("appleway");
  });
  test("camelcase vowel starting with vowel", () => {
    const result = translate("ApplE");
    expect(result).toBe("appleway");
  });
  test("three consent", () => {
    const result = translate("hgjiary");
    expect(result).toBe("iaryhgjay");
  });
  test("u", () => {
    const result = translate("fun");
    expect(result).toBe("unfay");
  });
  test("u", () => {
    const result = translate("uncle");
    expect(result).toBe("uncleway");
  });
});
