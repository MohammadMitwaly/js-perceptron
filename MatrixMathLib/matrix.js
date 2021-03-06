class Matrix {
  constructor(amountOfRows, amountOfColumns, defaultValue) {
    this.rows = amountOfRows;
    this.cols = amountOfColumns;
    this.defaultValue = defaultValue !== undefined ? defaultValue : 0;
    this.values = this.initMatrix(this.rows, this.cols, this.defaultValue);
  }

  // TODO: Optimize repeated look-ups and loops
  
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

  randomizeValuesIntegers(lowerLimit, upperLimit) {
    lowerLimit = lowerLimit !== undefined ? lowerLimit : 10;
    upperLimit = upperLimit !== undefined ? upperLimit : 10;
    // TODO: Optimize for performance by replacing with for loop and changing the lookup
    this.values.forEach((row, rowIndex) => {
      row.forEach((_item, colIndex) => {
        this.values[rowIndex][colIndex] = Math.floor(
          Math.random() * (upperLimit - lowerLimit) + lowerLimit
        );
      });
    });
  }

  //TODO: Update with specific range
  // Now it only generate values between 1 and -1
  randomizeValuesDecimal() {
    // TODO: Optimize for performance by replacing with for loop and changing the lookup
    this.values.forEach((row, rowIndex) => {
      row.forEach((_item, colIndex) => {
        this.values[rowIndex][colIndex] = Math.random() * 2 - 1;
      });
    });
  }

  //TODO: Add broadcasting support
  // TODO: Optimize for performance by replacing with for loop and changing the lookup
  multiplyScalar(scalar) {
    if (scalar instanceof Number || scalar instanceof Matrix) {
      const scalarValues = scalar.values;
      this.values.forEach((row, rowIndex) => {
        row.forEach((_item, colIndex) => {
          this.values[rowIndex][colIndex] *=
            scalar instanceof Matrix
              ? scalarValues[rowIndex][colIndex]
              : scalar;
        });
      });
    } else {
      throw new Error("Scalar must be a number or another Matrix");
    }
  }

  // This function is here to avoid mutating the state of the current object's matrix if we don't want to
  static multiply(matrix1, matrix2) {
    if (matrix1.cols !== matrix2.rows) {
      throw new Error("Matrix dimensions are not suitable");
    } else {
      const productMatrix = new Matrix(matrix1.rows, matrix2.cols);
      const a = matrix2;
      const b = matrix1;
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
  // Transpose the values matrix of the current object
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

  // Transpose any matrix
  static transpose(m) {
    const transposedMatrix = new Matrix(m.cols, m.rows);
    m.values.forEach((row, rowIndex) => {
      row.forEach((_item, colIndex) => {
        transposedMatrix.values[colIndex][rowIndex] =
          m.values[rowIndex][colIndex];
      });
    });
    return transposedMatrix;
  }

  // Use this to call a function on all of the values in the values matrix
  mapToValues(fn) {
    this.values.forEach((row, rowIndex) => {
      row.forEach((_item, colIndex) => {
        const currentItemValue = this.values[rowIndex][colIndex];

        this.values[rowIndex][colIndex] = fn(
          currentItemValue,
          rowIndex,
          colIndex
        );
      });
    });
  }

  convertFromMatrixToArray() {
    const outputArr = [];
    this.values.forEach((row, rowIndex) => {
      row.forEach((_item, colIndex) => {
        const currentItemValue = this.values[rowIndex][colIndex];
        outputArr.push(currentItemValue);
      });
    });
    return outputArr;
  }

  static mapToValues(matrix, fn) {
    matrix.values.forEach((row, rowIndex) => {
      row.forEach((_item, colIndex) => {
        const currentItemValue = matrix.values[rowIndex][colIndex];
        matrix.values[rowIndex][colIndex] = fn(
          currentItemValue,
          rowIndex,
          colIndex
        );
      });
    });
  }

  static convertFromArrayToMatrix(arr) {
    const matrix = new Matrix(arr.length, 1);
    arr.forEach((value, rowIndex) => {
      matrix.values[rowIndex][0] = value;
    });
    return matrix;
  }

  static subtractMatrices(matrixA, matrixB) {
    // Check if dimensions match
    if (matrixA.cols === matrixB.cols && matrixB.rows === matrixB.rows) {
      const scalarValuesA = matrixA.values;
      const scalarValuesB = matrixB.values;
      const resultMatrix = new Matrix(matrixA.rows, matrixA.cols);
      resultMatrix.values.forEach((row, rowIndex) => {
        row.forEach((_item, colIndex) => {
          resultMatrix.values[rowIndex][colIndex] =
            scalarValuesA[rowIndex][colIndex] -
            scalarValuesB[rowIndex][colIndex];
        });
      });
      return resultMatrix;
    } else {
      throw new Error("Dimensions do not match");
    }
  }
}

// module.exports = Matrix;
