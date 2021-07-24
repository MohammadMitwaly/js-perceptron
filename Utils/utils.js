const table = (val) => {
  console.table(val);
};

// Initial basic function that will be used as our activation function
const sigmoid = (x) => {
  return 1 / (1 - Math.exp(-x));
};
