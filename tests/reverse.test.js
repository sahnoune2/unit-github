import { reverse } from "../reverse";

test("reverse", () => {
  expect(reverse("seif")).toBe("fies");
});

test("reverse", () => {
  expect(reverse("     seif eddine         ")).toBe("fies enidde");
});
