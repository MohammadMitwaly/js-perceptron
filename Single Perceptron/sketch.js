const amountOfWeights = 3;
const amountOfDataPoints = 200;
const perceptron = new Perceptron(amountOfWeights);
const inputs = fillArray(2, -1, 1);
let points;
let trainingIndex = 0;

function setup() {
  createCanvas(800, 800);
  points = initDataset(amountOfDataPoints, DataPoint);
}

function draw() {
  background(0);
  // seperating the values by the line that is ➡ y = x
  stroke(255);
  const examplePointOnTheLine1 = new DataPoint(-1, lineFunc(-1));
  const examplePointOnTheLine2 = new DataPoint(1, lineFunc(1));

  // Drawing our line
  line(
    examplePointOnTheLine1.getPixelXCoordinate(),
    examplePointOnTheLine1.getPixelYCoordinate(),
    examplePointOnTheLine2.getPixelXCoordinate(),
    examplePointOnTheLine2.getPixelYCoordinate()
  );

  // Drawing the current best prediction from the perceptron of where the line should be
  const examplePointOnTheLine3 = new DataPoint(
    -1,
    perceptron.preditCurrentLine(-1)
  );
  const examplePointOnTheLine4 = new DataPoint(
    1,
    perceptron.preditCurrentLine(1)
  );
  line(
    examplePointOnTheLine3.getPixelXCoordinate(),
    examplePointOnTheLine3.getPixelYCoordinate(),
    examplePointOnTheLine4.getPixelXCoordinate(),
    examplePointOnTheLine4.getPixelYCoordinate()
  );

  points.forEach((point) => {
    // Drawing each point
    point.drawDataPoint();

    // Drawing the predictions
    const inputs = [point.x, point.y, point.bias];
    const targetLabel = point.label;
    const prediction = perceptron.predict(inputs);
    prediction === targetLabel ? fill("green") : fill("red");
    noStroke();
    ellipse(
      point.getPixelXCoordinate(),
      point.getPixelYCoordinate(),
      11.25,
      11.25
    );
  });

  trainSpecificIndex();
  // If we have already trained all of the points, loop back to train again from the start,
  // else, continue to train the next point, until we are back at the start
  trainingIndex === points.length - 1 ? (trainingIndex = 0) : trainingIndex++;
}

function trainSpecificIndex() {
  const point = points[trainingIndex];
  const inputs = [point.x, point.y, point.bias];
  const targetLabel = point.label;
  perceptron.train(inputs, targetLabel);
}
