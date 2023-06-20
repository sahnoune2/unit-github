import { cesar } from "../cesar";

test("encrypting", () => {
  expect(cesar("abcd")).toBe("bcde");
});

test("encrypting", () => {
  expect(cesar("         abcd      bcde")).toBe("bcde cdef");
});
