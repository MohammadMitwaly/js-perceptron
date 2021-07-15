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
