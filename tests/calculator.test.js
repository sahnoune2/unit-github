import { calc } from "../calculator";

test("calc", () => {
  expect(calc(1, 2)).toBe(3);
});

test("calc", () => {
  expect(calc(1, "a")).toBe("error ,check ur entries");
});
