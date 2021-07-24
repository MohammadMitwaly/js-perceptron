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
  }
}
