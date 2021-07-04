class Perceptron {
  weights = [];
  // How much to adjust the weights on each training epoch
  learningRate = 0.1;

  constructor(amountOfWeights) {
    // Initializing the weights to random starting values based on an input amount
    for (let i = 0; i < amountOfWeights; i++) {
      this.weights.push(getRndInteger(-1, 1));
    }
  }

  // Make a prediction(infer) the label of the given input
  predict(inputs) {
    let sum = 0;
    inputs.forEach((input, index) => {
      sum += input * this.weights[index];
    });
    const output = activationFunction(sum);
    return output;
  }

  // Tuning the weights based on the error of the prediction of the previous weights
  train(inputs, targetLabel) {
    const prediction = this.predict(inputs);
    const error = targetLabel - prediction;

    this.weights.forEach((_weight, index, arr) => {
      arr[index] += error * inputs[index] * this.learningRate;
    });
  }

  // Seeing where the perceptron "thinks" the line is at this stage in training
  preditCurrentLine(xCoordinate) {
    const weight0 = this.weights[0];
    const weight1 = this.weights[1];
    const weight2 = this.weights[2];
    return -(weight2 / weight1) - (weight0 / weight1) * xCoordinate;
  }
}
