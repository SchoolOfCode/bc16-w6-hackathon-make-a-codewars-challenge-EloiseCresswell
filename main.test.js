import { test, expect } from "vitest";
import { dogMonthlyCost } from "./main.js";

// `dogMonthlyCost(['sticks', 2 , 'balls', 100, 'Ivy'])` should return "My dog Ivy has 2 sticks, 100 balls. This month she has cost me £10"
test("should return £10 for example 1 MVP1", () => {
  //Arrange
  const expected =
    "My dog Ivy has 2 sticks, 100 balls. This month she has cost me £10";
  //Act
  const actual = dogMonthlyCost(["sticks", 2, "balls", 100, "Ivy"]);
  //Assert
  expect(actual).toBe(expected);
});

test("should return £10 for example 2 MVP1", () => {
  //Arrange
  const expected =
    "My dog Steve has 0 sticks,100 balls. This month she has cost me £10";
  //Act
  const actual = dogMonthlyCost(["sticks", 0, "balls", 50, "Steve"]);
  //Assert
  expect(actual).toBe(expected);
});
