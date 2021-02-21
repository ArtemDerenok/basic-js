const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let number = 0;
  for (let elem of matrix) {
    if (elem == "^^") {
      number++;
    }
    if (typeof elem == "object") {
      for (let elem1 of elem) {
        if (elem1 == "^^") {
          number++;
        }
      }
    }
  }
  return number;
};
