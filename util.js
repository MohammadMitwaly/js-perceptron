// Generate random floating point numbers in range(included, excluded)
// Source: https://www.w3schools.com/js/js_random.asp
const getRndInteger = (min, max) => {
  return Math.random() * (max - min) + min;
};

// The 'sign' function used in guess
const activationFunction = (weightedSumOfInputs) => {
  return weightedSumOfInputs > 0 ? 1 : -1;
};

// Fill array of N length with N random values of y range
// Source: https://stackoverflow.com/a/43044960/6236395
const fillArray = (len, min, max) => {
  return Array.from({ length: len }, () => getRndInteger(min, max));
};

const initDataset = (len, classToBuildWith) => {
  const dataset = [];
  for (let i = 0; i < len; i++) {
    dataset.push(new classToBuildWith());
  }
  return dataset;
};
