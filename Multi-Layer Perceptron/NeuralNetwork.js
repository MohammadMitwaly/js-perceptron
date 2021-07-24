const Matrix = require("../MatrixMathLib/matrix");

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
  }
}
