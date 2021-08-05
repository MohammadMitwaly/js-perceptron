const neuralNetwork = new NeuralNetwork(2, 2, 1);
const inputs = [1, 0];

function setup() {
  createCanvas(400, 400);
  // const output = neuralNetwork.feedForward(inputs);
  // console.log(output);
  neuralNetwork.backpropagation(inputs, [1]);
}

function draw() {
  background(0);
}
