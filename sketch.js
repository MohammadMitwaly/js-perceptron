const perceptron = new Perceptron();
const inputs = fillArray(2, -1, 1);

function setup() {
  createCanvas(400, 400);
  console.log(perceptron.guess(inputs));
}

function draw() {
  background(220);
}
