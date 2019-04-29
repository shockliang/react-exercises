const add = (a, b) => a + b;
const generateGreating = (name = "Anonymous") => `Hello ${name}`;

test("should add two numbers", () => {
  const result = add(1, 2);
  expect(result).toBe(3);
});

test("should generate greating from name", () => {
  const result = generateGreating("Shock");
  expect(result).toBe("Hello Shock");
});

test("should generate greating for no name", () => {
  const result = generateGreating();
  expect(result).toBe("Hello Anonymous");
});
