class Matrix {
  constructor(amountOfRows, amountOfColumns, defaultValue) {
    this.rows = amountOfRows;
    this.cols = amountOfColumns;
    this.defaultValue = defaultValue !== undefined ? defaultValue : 0;
    this.values = this.initMatrix(this.rows, this.cols, this.defaultValue);
  }

  // Source: https://stackoverflow.com/a/13808461/6236395
  initMatrix(w, h, val) {
    var arr = [];
    for (let i = 0; i < h; i++) {
      arr[i] = [];
      for (let j = 0; j < w; j++) {
        arr[i][j] = val;
      }
    }
    return arr;
  }

  randomiseValues(lowerLimit, upperLimit) {
    lowerLimit = lowerLimit !== undefined ? lowerLimit : 10;
    upperLimit = upperLimit !== undefined ? upperLimit : 10;

    this.values.forEach((row, rowIndex) => {
      row.forEach((_item, colIndex) => {
        this.values[rowIndex][colIndex] = Math.floor(
          Math.random() * (upperLimit - lowerLimit) + lowerLimit
        );
      });
    });
  }

  multiplyScalar(scalar) {
    this.values.forEach((row, rowIndex) => {
      row.forEach((item, colIndex) => {
        this.values[rowIndex][colIndex] *=
          scalar instanceof Matrix ? scalar[i][j] : scalar;
      });
    });
  }

  addScalar(scalar) {
    this.values.forEach((row, rowIndex) => {
      row.forEach((item, colIndex) => {
        this.values[rowIndex][colIndex] +=
          scalar instanceof Matrix ? scalar[i][j] : scalar;
      });
    });
  }

  subtractScalar(scalar) {
    this.values.forEach((row, rowIndex) => {
      row.forEach((item, colIndex) => {
        this.values[rowIndex][colIndex] -=
          scalar instanceof Matrix ? scalar[i][j] : scalar;
      });
    });
  }

  divideScalar(scalar) {
    this.values.forEach((row, rowIndex) => {
      row.forEach((item, colIndex) => {
        this.values[rowIndex][colIndex] /=
          scalar instanceof Matrix ? scalar[i][j] : scalar;
      });
    });
  }
}
