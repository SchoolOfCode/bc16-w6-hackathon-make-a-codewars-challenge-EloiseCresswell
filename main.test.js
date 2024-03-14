import { test, expect } from "vitest";
import { dogMonthlyCost } from "./main.js";

// `dogMonthlyCost(['sticks', 2 , 'balls', 100, 'Ivy'])` should return "My dog Ivy has 2 sticks, 100 balls. This month she has cost me £10"
test("should return £10 for example 1 MVP1", () => {
  //Arrange
  const expected =
    "My dog Ivy has 2 sticks and 100 balls. This month they have cost me £10";
  //Act
  const actual = dogMonthlyCost(["sticks", 2, "balls", 100, "Ivy"]);
  //Assert
  expect(actual).toBe(expected);
});

test("should return £10 for example 2 MVP1", () => {
  //Arrange
  const expected =
    "My dog Steve has 0 sticks and 50 balls. This month they have cost me £10";
  //Act
  const actual = dogMonthlyCost(["sticks", 0, "balls", 50, "Steve"]);
  //Assert
  expect(actual).toBe(expected);
});

test("should return £5 for example 3, MVP1", () => {
  //Arrange
  let expecte =
    "My dog Simon has 2 sticks and 75 balls. This month, they have cost me £5";
  //Act
  //Assert
});
