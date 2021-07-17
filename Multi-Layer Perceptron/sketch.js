const matrix1 = new Matrix(2, 3);
const matrix2 = new Matrix(3, 2);

function setup() {
  createCanvas(400, 400);
  matrix1.randomizeValues(1, 5);
  matrix2.randomizeValues(1, 5);
  // console.table prints a tabular(table) view of the matrix
  console.table(matrix1.values);
  console.table(matrix2.values);

  const productMatrix = matrix1.multiplyScalar(matrix2);
  console.table(productMatrix.values);
}

function draw() {
  background(0);
}
