const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let cnt = 0;
    for (let elem of arr) {
      if (typeof elem == "object") {
        cnt = Math.max(this.calculateDepth(elem), cnt);
      }
    }
    return cnt + 1;
  }
};
