const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr) == false) {
    throw new Error("Error");
  } else {
    let arr1 = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "--discard-next") {
        i++;
        arr1.push(undefined);
        continue;
      } else if (arr[i] == "--double-prev") {
        arr1.push(arr1[arr1.length - 1]);
      } else if (arr[i] == "--double-next") {
        arr1.push(arr[i + 1]);
      } else if (arr[i] == "--discard-prev") {
        arr1.splice(arr1.length - 1, 1);
      } else {
        arr1.push(arr[i]);
      }
    }

    let arr2 = [];

    for (let elem of arr1) {
      if (elem == undefined) {
        continue;
      } else {
        arr2.push(elem);
      }
    }
    return arr2;
  }
};
