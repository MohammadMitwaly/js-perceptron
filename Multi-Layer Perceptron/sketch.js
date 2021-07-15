const matrix = new Matrix(3, 3, 2);

function setup() {
  createCanvas(400, 400);
  // console.table prints a tabular(table) view of the matrix
  console.table(matrix.values);
  matrix.addScalar(2);
  console.table(matrix.values);
}

function draw() {
  background(0);
}
