import { test, expect } from "vitest";
import { dogMonthlyCost } from "./main.js";

//Please see JamBoard following the link: for the examples
// https://jamboard.google.com/d/1MyuUcj8szgu60FB7zdGt6VJepWAFEB5ADviME_Lpc8c/viewer?f=0

//Example 1
test("should return £10 for example 1 MVP1", () => {
  //Arrange
  const expected =
    "My dog Ivy has 2 sticks and 100 balls. This month they have cost me £10";
  //Act
  const actual = dogMonthlyCost(["sticks", 2, "balls", 100, "Ivy"]);
  //Assert
  expect(actual).toBe(expected);
});

//Example 2
test("should return £10 for example 2 MVP1", () => {
  //Arrange
  const expected =
    "My dog Steve has 0 sticks and 50 balls. This month they have cost me £10";
  //Act
  const actual = dogMonthlyCost(["sticks", 0, "balls", 50, "Steve"]);
  //Assert
  expect(actual).toBe(expected);
});

//Example 3
test("should return £5 for example 3, MVP1", () => {
  //Arrange
  let expected =
    "My dog Simon has 2 sticks and 75 balls. This month they have cost me £5";
  //Act
  const actual = dogMonthlyCost(["sticks", 2, "balls", 75, "Simon"]);
  //Assert
  expect(actual).toBe(expected);
});

//Example 4
//Please note, the above examples all took PLURAL sticks/balls... this next test will test if just 1 stick is given
test("test for example 4, if 1 stick is given", function () {
  //Arrange
  let expected =
    "My dog Princess has 1 stick and 75 balls. This month they have cost me £10";
  //Act
  const actual = dogMonthlyCost(["sticks", 1, "balls", 75, "Princess"]);
  //Assert
  expect(actual).toEqual(expected);
});

//Example 5
//Test if 1 ball is needed and no sticks
test("test for example 5", () => {
  //Arrage
  let expected =
    "My dog Spooky has 0 sticks and 1 ball. This month they have cost me £0.20";
  //Act
  const actual = dogMonthlyCost(["sticks", 0, "balls", 1, "Spooky"]);
  //Assert
  expect(actual).toEqual(expected);
});

//Example 6
//Test if there is not a whole integer cost
test("testing example 6, if there is not a integer for the cost", () => {
  //Arrange
  let expected =
    "My dog Sparkle has 1 stick and 78 balls. This month they have cost me £10.60";
  //Act
  const actual = dogMonthlyCost(["sticks", 1, "balls", 78, "Sparkle"]);
  //Assert
  expect(actual).to.equal(expected);
});
