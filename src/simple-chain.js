const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    this.arr.length;
  },
  addLink(value) {
    this.arr.push("( " + value + " )");
    return this;
  },
  removeLink(position) {
    if (
      typeof position != "number" ||
      position < 1 ||
      position > this.arr.length
    ) {
      this.arr = [];
      throw new Error("Error");
    } else {
      this.arr.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let str = this.arr.join("~~");
    this.arr = [];
    return str;
  },
};

module.exports = chainMaker;
