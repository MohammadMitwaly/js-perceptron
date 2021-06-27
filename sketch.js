const perceptron = new Perceptron();
const inputs = fillArray(2, -1, 1);
let points;

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
}

// Training the perceptron on each mouse click
function mousePressed() {
  points.forEach((point) => {
    const inputs = [point.x, point.y];
    const targetLabel = point.label;
    perceptron.train(inputs, targetLabel);
  });
}
