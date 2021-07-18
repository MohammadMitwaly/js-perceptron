class Matrix {
  constructor(amountOfRows, amountOfColumns, defaultValue) {
    this.rows = amountOfRows;
    this.cols = amountOfColumns;
    this.defaultValue = defaultValue !== undefined ? defaultValue : 0;
    this.values = this.initMatrix(this.rows, this.cols, this.defaultValue);
  }

  // Source: https://stackoverflow.com/a/13808461/6236395
  // TODO: convert using array functions: map() , reduce(), fill()
  initMatrix(w, h, val) {
    var arr = [];
    for (let i = 0; i < w; i++) {
      arr[i] = [];
      for (let j = 0; j < h; j++) {
        arr[i][j] = val;
      }
    }
    return arr;
  }

  randomizeValues(lowerLimit, upperLimit) {
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

  //TODO: Add broadcasting support
  // TODO: Add tests to future proof any changes
  // isHadamard refers to: https://en.wikipedia.org/wiki/Hadamard_product_(matrices)
  multiplyScalar(scalar, isHadamard) {
    const scalarValues = scalar.values;
    if (isHadamard || !scalar instanceof Matrix) {
      this.values.forEach((row, rowIndex) => {
        row.forEach((_item, colIndex) => {
          this.values[rowIndex][colIndex] *=
            scalar instanceof Matrix
              ? scalarValues[rowIndex][colIndex]
              : scalar;
        });
      });
    } else if (scalar.rows !== this.cols) {
      throw new Error("Matrix dimensions are not suitable");
    } else {
      const productMatrix = new Matrix(this.rows, scalar.cols);
      const a = this;
      const b = scalar;
      productMatrix.values.forEach((row, rowIndex) => {
        row.forEach((_item, colIndex) => {
          let sum = 0;
          for (let k = 0; k < a.cols; k++) {
            sum += a.values[rowIndex][k] * b.values[k][colIndex];
          }
          productMatrix.values[rowIndex][colIndex] = sum;
        });
      });
      return productMatrix;
    }
  }

  addScalar(scalar) {
    const scalarValues = scalar.values;
    this.values.forEach((row, rowIndex) => {
      row.forEach((_item, colIndex) => {
        this.values[rowIndex][colIndex] +=
          scalar instanceof Matrix ? scalarValues[rowIndex][colIndex] : scalar;
      });
    });
  }

  subtractScalar(scalar) {
    const scalarValues = scalar.values;
    this.values.forEach((row, rowIndex) => {
      row.forEach((_item, colIndex) => {
        this.values[rowIndex][colIndex] -=
          scalar instanceof Matrix ? scalarValues[rowIndex][colIndex] : scalar;
      });
    });
  }

  divideScalar(scalar) {
    const scalarValues = scalar.values;
    this.values.forEach((row, rowIndex) => {
      row.forEach((_item, colIndex) => {
        this.values[rowIndex][colIndex] /=
          scalar instanceof Matrix ? scalarValues[rowIndex][colIndex] : scalar;
      });
    });
  }

  // https://mathinsight.org/matrix_transpose
  transpose() {
    const transposedMatrix = new Matrix(this.cols, this.rows);
    this.values.forEach((row, rowIndex) => {
      row.forEach((_item, colIndex) => {
        transposedMatrix.values[colIndex][rowIndex] =
          this.values[rowIndex][colIndex];
      });
    });
    return transposedMatrix;
  }
}
