class DataPoint {
  constructor() {
    // Using P5's 'random' function to create points within the coordinates of the canvas
    this.x = random(width);
    this.y = random(height);
    this.label = this.x > this.y ? 1 : -1;
  }

  // Drawing the point on the canvas based on the coordinates and the label
  drawDataPoint() {
    stroke(255);
    this.label == 1 ? fill(0) : fill(255);
    ellipse(this.x, this.y, 11.5, 11.5);
  }
}
