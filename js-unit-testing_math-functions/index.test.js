import { add } from "./index.js";
import { subtract } from "./index.js";
import { multiply } from "./index.js";
import { divide } from "./index.js";

test("add(a, b) is returning sum of two numbers", () => {
  const sum = add(3, 2);
  expect(sum).toBe(5);
});

test("substract(a, b) returns substraction of two numbers", () => {
  const minus = subtract(5, 10);
  expect(minus).toBeLessThan(0);
});

test("multiply(a, b) returns multiply value of two numbers", () => {
  const multy = multiply(2, 4);
  expect(multy).toBe(8);
});

test("divide(a, b) returns divide value of two numbers", () => {
  const div = divide(15, 3);
  expect(div).toBe(5);
});
test("divide(a, b) returns divide value of two numbers", () => {
  const div = divide(5, 0);
  expect(div).toBe("You should not do this!");
});
