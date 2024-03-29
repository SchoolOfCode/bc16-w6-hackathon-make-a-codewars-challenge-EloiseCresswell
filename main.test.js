import { test, expect } from "vitest";
import { dogMonthlyCost } from "./main.js";

//Please see JamBoard following the link: for the examples
// https://jamboard.google.com/d/1MyuUcj8szgu60FB7zdGt6VJepWAFEB5ADviME_Lpc8c/viewer?f=0

//Example 1
test("should return £16.25 for example 1 MVP1", () => {
  //Arrange
  const expected =
    "My dog Ivy has 2 sticks, 100 balls and has stolen 5 socks. This month they have cost me £16.25";
  //Act
  const actual = dogMonthlyCost(["sticks", 2, "balls", 100, "socks", 5, "Ivy"]);
  //Assert
  expect(actual).toBe(expected);
});

//Example 2
test("should return £15 for example 2 MVP1 with addition of MVP3", () => {
  //Arrange
  const expected =
    "My dog Steve has 0 sticks, 50 balls and has stolen 4 socks. This month they have cost me £15";
  //Act
  const actual = dogMonthlyCost([
    "sticks",
    0,
    "balls",
    50,
    "socks",
    4,
    "Steve",
  ]);
  //Assert
  expect(actual).toBe(expected);
});

//Example 3
test("should return £5 for example 3, MVP1 with additional MVP3", () => {
  //Arrange
  let expected =
    "My dog Simon has 2 sticks, 75 balls and has stolen 0 socks. This month they have cost me £5";
  //Act
  const actual = dogMonthlyCost([
    "sticks",
    2,
    "balls",
    75,
    "socks",
    0,
    "Simon",
  ]);
  //Assert
  expect(actual).toBe(expected);
});

//Example 4
//Please note, the above examples all took PLURAL sticks/balls... this next test will test if just 1 stick is given
test("test for example 4, if 1 stick is given", function () {
  //Arrange
  let expected =
    "My dog Princess has 1 stick, 75 balls and has stolen 15 socks. This month they have cost me £28.75";
  //Act
  const actual = dogMonthlyCost([
    "sticks",
    1,
    "balls",
    75,
    "socks",
    15,
    "Princess",
  ]);
  //Assert
  expect(actual).toEqual(expected);
});

//Example 5
//Test if 1 ball is needed and no sticks
test("test for example 5", () => {
  //Arrage
  let expected =
    "My dog Spooky has 0 sticks, 1 ball and has stolen 0 socks. This month they have cost me £0.20";
  //Act
  const actual = dogMonthlyCost([
    "sticks",
    0,
    "balls",
    1,
    "socks",
    0,
    "Spooky",
  ]);
  //Assert
  expect(actual).toEqual(expected);
});

//Example 6
//Test if there is not a whole integer cost
test("testing example 6, if there is not a integer for the cost", () => {
  //Arrange
  let expected =
    "My dog Sparkle has 1 stick, 78 balls and has stolen 4 socks. This month they have cost me £15.60";
  //Act
  const actual = dogMonthlyCost([
    "sticks",
    1,
    "balls",
    78,
    "socks",
    4,
    "Sparkle",
  ]);
  //Assert
  expect(actual).toEqual(expected);
});

//MVP2 Example 1
//Test if the dog 'makes money' that month.
test("testing if the dog makes money", () => {
  //Arrange
  let expected =
    "My dog Ivy has 5 sticks, 2 balls and has stolen 1 sock. This month they have made me £23.35";
  //Act
  const actual = dogMonthlyCost(["sticks", 5, "balls", 2, "socks", 1, "Ivy"]);
  //Assert
  expect(actual).toEqual(expected);
});
