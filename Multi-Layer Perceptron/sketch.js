const matrix1 = new Matrix(2, 3);
const matrix2 = new Matrix(3, 2);

function setup() {
  createCanvas(400, 400);
  matrix1.randomizeValues(1, 5);
  matrix2.randomizeValues(1, 5);

  // Table is a helper function that calls console.table, find it in Utils/util.js
  table(matrix1.values);
  table(matrix2.values);

  const productMatrix = matrix1.multiplyScalar(matrix2);
  table(productMatrix.values);

  const transposedMatrix = matrix2.transpose();
  table(transposedMatrix.values);
}

function draw() {
  background(0);
}
