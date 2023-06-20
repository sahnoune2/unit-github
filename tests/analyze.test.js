import { all } from "../analyze";

test("analyze", () => {
  expect(all([5, 2, 3, 6])).toStrictEqual({
    average: 4,
    min: 2,
    max: 6,
    length: 4,
  });
});
