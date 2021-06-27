const perceptron = new Perceptron();
const inputs = fillArray(2, -1, 1);
let points;

function setup() {
  createCanvas(400, 400);
  points = initDataset(100, DataPoint);
}

function draw() {
  background(0);
  line(0, 0, width, height);
  points.forEach((point) => point.drawDataPoint());
}