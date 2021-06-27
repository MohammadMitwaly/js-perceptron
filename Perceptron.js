class Perceptron {
  weights = [0, 0];
  // How much to adjust the weights on each training epoch
  learningRate = 0.1;

  constructor() {
    // Initializing the weights to random starting values
    this.weights.forEach((_weight, index, arr) => {
      arr[index] = getRndInteger(-1, 1);
    });
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
}
