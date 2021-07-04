class DataPoint {
  constructor(inputX, inputY) {
    // Using P5's 'random' function to create points within a Cartesian coordinate system if we do not send input
    // This allows us to create our own points with specific coordinates, or create random points
    this.x = inputX !== undefined ? inputX : random(-1, 1);
    this.y = inputY !== undefined ? inputY : random(-1, 1);
    this.bias = 1;

    const lineY = lineFunc(this.y);

    this.label = this.y > lineY ? 1 : -1;
  }

  // Mapping the Cartesian values to Pixel values
  getPixelXCoordinate() {
    return map(this.x, -1, 1, 0, width);
  }

  // Flipping the y's mapping so that when y is close to one, it appears higher, while when it is close to -1 it appears lower
  // Instead of the opposite in the regular P5 pixel space
  getPixelYCoordinate() {
    return map(this.y, -1, 1, height, 0);
  }

  // Drawing the point on the canvas based on the coordinates and the label
  drawDataPoint() {
    stroke(255);
    this.label == 1 ? fill(0) : fill(255);
    const pX = this.getPixelXCoordinate();
    const pY = this.getPixelYCoordinate();
    ellipse(pX, pY, 11.5, 11.5);
  }
}
