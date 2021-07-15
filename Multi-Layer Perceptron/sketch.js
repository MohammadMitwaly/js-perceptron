const matrix1 = new Matrix(3, 3, 2);
const matrix2 = new Matrix(3, 3);

function setup() {
  createCanvas(400, 400);
  matrix1.randomiseValues(1, 10);
  matrix2.randomiseValues(1, 10);
  // console.table prints a tabular(table) view of the matrix
  console.table(matrix1.values);

  matrix1.addScalar(matrix2);
  console.table(matrix1.values);
}

function draw() {
  background(0);
}
