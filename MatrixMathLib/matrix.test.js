const Matrix = require("./matrix");

test("Create matrix", () => {
  const testM = new Matrix(3, 3);
  expect(testM).toBeInstanceOf(Matrix);
});

test("Create matrix without default value", () => {
  const testM = new Matrix(3, 3);
  expect(testM.values[0][0]).toBe(0);
});

test("Create matrix with default value", () => {
  const testM = new Matrix(3, 3, 3);
  expect(testM.values[0][1]).toBe(3);
});

test("Matrix randomize in range", () => {
  const testM = new Matrix(3, 3);
  const lowerLimit = 1;
  const upperLimit = 5;
  testM.randomizeValues(lowerLimit, upperLimit);
  expect(testM.values[0][0]).toBeGreaterThanOrEqual(1);
  expect(testM.values[0][0]).toBeLessThan(6);
});

test("Matrix multiplication output structure", () => {
  const matrix1 = new Matrix(2, 3);
  const matrix2 = new Matrix(3, 2);

  matrix1.randomizeValues(1, 5);
  matrix2.randomizeValues(1, 5);

  const matrix3 = Matrix.multiply(matrix1, matrix2);

  expect(matrix3.rows).toBe(matrix2.rows);
  expect(matrix3.cols).toBe(matrix1.cols);
});
