import { add } from "./App";

//Unit Test
test("add", () => {
  const value = add(1, 2);
  expect(value).toBe(3);
  expect(add(7, 5)).toBe(12);
});
