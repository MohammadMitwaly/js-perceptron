class DataPoint {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.label = this.x > this.y ? 1 : -1;
  }

  drawDataPoint() {
    stroke(255);
    this.label == 1 ? fill(0) : fill(255);
    ellipse(this.x, this.y, 6, 6);
  }
}
