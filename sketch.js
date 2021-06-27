const perceptron = new Perceptron();
const inputs = fillArray(2, -1, 1);
let points;
let trainingIndex = 0;

function setup() {
  createCanvas(750, 750);
  points = initDataset(100, DataPoint);
}

function draw() {
  background(0);
  // seperating the values by the line that is ➡ y = x
  stroke(255);
  line(0, 0, width, height);
  points.forEach((point) => {
    // Drawing each point
    point.drawDataPoint();

    // Drawing the predictions
    const inputs = [point.x, point.y];
    const targetLabel = point.label;
    const prediction = perceptron.predict(inputs);
    prediction === targetLabel ? fill("green") : fill("red");
    noStroke();
    ellipse(point.x, point.y, 11.25, 11.25);
  });

  trainSpecificIndex();
  // If we have already trained all of the points, loop back to train again from the start,
  // else, continue to train the next point, until we are back at the start
  trainingIndex === points.length - 1 ? (trainingIndex = 0) : trainingIndex++;
}

function trainSpecificIndex() {
  console.log(trainingIndex);
  const point = points[trainingIndex];
  const inputs = [point.x, point.y];
  const targetLabel = point.label;
  perceptron.train(inputs, targetLabel);
}
