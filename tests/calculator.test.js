import { myObject } from "../calculator";

test("add", () => {
  expect(myObject.add(1, 2)).toBe(3);
});

test("add", () => {
  expect(myObject.add(1, "a")).toBe("error ,check ur entries");
});

test("sub", () => {
  expect(myObject.sub(1, 2)).toBe(-1);
});

test("mult", () => {
  expect(myObject.mult(1, 2)).toBe(2);
});

test("div", () => {
  expect(myObject.div(1, 0)).toBe(Infinity);
});
