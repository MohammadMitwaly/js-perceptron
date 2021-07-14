const matrix = new Matrix(3, 3, 2);

function setup() {
  createCanvas(400, 400);
  console.log(matrix);
  matrix.addScalar(2);
  console.log(matrix.values);
}

function draw() {
  background(0);
}
