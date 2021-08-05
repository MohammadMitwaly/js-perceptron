class NeuralNetwork {
  constructor(inputAmount, hiddenNeurons, outputAmount) {
    this.inputNodes = inputAmount;
    this.hiddenNodes = hiddenNeurons;
    this.outputNodes = outputAmount;
    // The weight matrix between the input nodes and the hidden layer
    this.weightsInputsHiddenLayer = new Matrix(
      this.hiddenNodes,
      this.inputNodes
    );
    // The weight matrix for the hidden layer and the output nodes
    this.weightsHiddenLayerOutputs = new Matrix(
      this.outputNodes,
      this.hiddenNodes
    );

    // Randomize weights initially
    this.weightsInputsHiddenLayer.randomizeValuesDecimal();
    this.weightsHiddenLayerOutputs.randomizeValuesDecimal();

    this.biasHiddenLayer = new Matrix(this.hiddenNodes, 1);
    this.biasOutputs = new Matrix(this.outputNodes, 1);

    // Randomize biases initially
    this.biasHiddenLayer.randomizeValuesDecimal();
    this.biasOutputs.randomizeValuesDecimal();
  }

  feedForward(inputsArray) {
    // Phase 1: generating the weighted sum of the inputs and th hidden layer
    const inputs = Matrix.convertFromArrayToMatrix(inputsArray);
    const hiddenWeightedSum = Matrix.multiply(
      this.weightsInputsHiddenLayer,
      inputs
    );
    hiddenWeightedSum.addScalar(this.biasHiddenLayer);
    hiddenWeightedSum.mapToValues(sigmoid);

    // Phase 2: generating the output weighted sums
    const outputs = Matrix.multiply(
      this.weightsHiddenLayerOutputs,
      hiddenWeightedSum
    );
    outputs.addScalar(this.biasOutputs);
    outputs.mapToValues(sigmoid);
    // Simplify output to a normal array(similar to our inputs) instead of a Matrix object
    return outputs.convertFromMatrixToArray();
  }

  backpropagation(inputs, targetLabels) {
    const outputs = Matrix.convertFromArrayToMatrix(this.feedForward(inputs));

    targetLabels = Matrix.convertFromArrayToMatrix(targetLabels);
    console.log("targetLabels", targetLabels);
    // Calculating the error of our model, which is = targets - outputs
    const error = Matrix.subtractMatrices(targetLabels, outputs);
    table(outputs);
    table(targetLabels);
    table(error);
  }
}
