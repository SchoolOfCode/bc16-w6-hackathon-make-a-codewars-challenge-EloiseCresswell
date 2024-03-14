import { test, expect } from "vitest";
import { dogMonthlyCost } from "./main.js";

test("shoould return £10 for example 1 MVP1", () => {
  const expected =
    "My dog Ivy has 2 sticks, 100 balls. This month she has cost me £10";
  const actual = dogMonthlyCost(["sticks", 2, "balls", 100, "Ivy"]);
  expect(actual).toBe(expected);
});

// `dogMonthlyCost(['sticks', 2 , 'balls', 100, 'Ivy'])` should return "My dog Ivy has 2 sticks, 100 balls. This month she has cost me £10"
