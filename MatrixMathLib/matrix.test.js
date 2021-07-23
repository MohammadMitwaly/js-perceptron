const Matrix = require("./matrix");

test("Create matrix", () => {
  const testM = new Matrix(3, 3);
  expect(testM).toBeInstanceOf(Matrix);
});

test("Create matrix without default value", () => {
  const testM = new Matrix(3, 3);
  expect(testM.values[0][0]).toBe(0);
});
