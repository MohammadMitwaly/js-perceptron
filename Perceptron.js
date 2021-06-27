class Perceptron {
  weights = [0, 0];

  constructor() {
    // Initializing the weights to random starting values
    this.weights.forEach((_weight, index, arr) => {
      arr[index] = getRndInteger(-1, 1);
    });
  }

  guess(inputs) {
    let sum = 0;
    inputs.forEach((input, index) => {
      sum += input * this.weights[index];
    });
    const output = activationFunction(sum);
    return output;
  }
}
