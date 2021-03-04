const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(flag = true) {
    this.flag = flag;
  }

  encrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error();
    }
    let word = message;
    let key1 = key;
    let result = "";
    let abc1 = {
      A: 0,
      B: 1,
      C: 2,
      D: 3,
      E: 4,
      F: 5,
      G: 6,
      H: 7,
      I: 8,
      J: 9,
      K: 10,
      L: 11,
      M: 12,
      N: 13,
      O: 14,
      P: 15,
      Q: 16,
      R: 17,
      S: 18,
      T: 19,
      U: 20,
      V: 21,
      W: 22,
      X: 23,
      Y: 24,
      Z: 25,
    };
    let abc2 = {
      0: "A",
      1: "B",
      2: "C",
      3: "D",
      4: "E",
      5: "F",
      6: "G",
      7: "H",
      8: "I",
      9: "J",
      10: "K",
      11: "L",
      12: "M",
      13: "N",
      14: "O",
      15: "P",
      16: "Q",
      17: "R",
      18: "S",
      19: "T",
      20: "U",
      21: "V",
      22: "W",
      23: "X",
      24: "Y",
      25: "Z",
    };
    word = word.toUpperCase();
    key1 = key1.toUpperCase();
    let arr1 = word.split("");
    let arr2 = key1.split("");
    let arr3 = []; //ключ в числах
    let arr4 = []; //слово в числах
    let cnt = 0;
    for (let i = 0; i < arr2.length; i++) {
      arr3.push(abc1[arr2[i]]);
    }

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] >= "A" && arr1[i] <= "Z") {
        arr4.push(abc1[arr1[i]]);
      } else {
        arr4.push(arr1[i]);
      }
    }
    for (let i = 0; i < arr4.length; i++) {
      if (cnt > arr3.length - 1) {
        cnt = 0;
      }
      if (typeof arr4[i] == "number") {
        if (arr4[i] + arr3[cnt] > 25) {
          arr4[i] = arr4[i] + arr3[cnt] - 26;
        } else {
          arr4[i] = arr4[i] + arr3[cnt];
        }
        cnt++;
      }
    }

    for (let i = 0; i < arr4.length; i++) {
      if (typeof arr4[i] == "number") {
        arr4[i] = abc2[arr4[i]];
      }
      if (arr4[i] >= "A" && arr4[i] <= "Z") {
        result = result + arr4[i];
      } else {
        result = result + arr1[i];
      }
    }
    // return result;
    if (this.flag) {
      return result.toUpperCase();
    } else {
      return result.toUpperCase().split("").reverse().join("");
    }
  }
  decrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error();
    }
    let word = message;
    let key1 = key;
    let result = "";
    let abc1 = {
      A: 0,
      B: 1,
      C: 2,
      D: 3,
      E: 4,
      F: 5,
      G: 6,
      H: 7,
      I: 8,
      J: 9,
      K: 10,
      L: 11,
      M: 12,
      N: 13,
      O: 14,
      P: 15,
      Q: 16,
      R: 17,
      S: 18,
      T: 19,
      U: 20,
      V: 21,
      W: 22,
      X: 23,
      Y: 24,
      Z: 25,
    };
    let abc2 = {
      0: "A",
      1: "B",
      2: "C",
      3: "D",
      4: "E",
      5: "F",
      6: "G",
      7: "H",
      8: "I",
      9: "J",
      10: "K",
      11: "L",
      12: "M",
      13: "N",
      14: "O",
      15: "P",
      16: "Q",
      17: "R",
      18: "S",
      19: "T",
      20: "U",
      21: "V",
      22: "W",
      23: "X",
      24: "Y",
      25: "Z",
    };
    word = word.toUpperCase();
    key1 = key1.toUpperCase();
    let arr1 = word.split("");
    let arr2 = key1.split("");
    let arr3 = []; //ключ в числах
    let arr4 = []; //слово в числах
    let cnt = 0;
    for (let i = 0; i < arr2.length; i++) {
      arr3.push(abc1[arr2[i]]);
    }

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] >= "A" && arr1[i] <= "Z") {
        arr4.push(abc1[arr1[i]]);
      } else {
        arr4.push(arr1[i]);
      }
    }

    for (let i = 0; i < arr4.length; i++) {
      if (cnt > arr3.length - 1) {
        cnt = 0;
      }
      if (typeof arr4[i] == "number") {
        if (arr4[i] - arr3[cnt] < 0) {
          arr4[i] = arr4[i] + 26 - arr3[cnt];
        } else {
          arr4[i] = arr4[i] - arr3[cnt];
        }
        cnt++;
      }
    }

    for (let i = 0; i < arr4.length; i++) {
      if (typeof arr4[i] == "number") {
        arr4[i] = abc2[arr4[i]];
      }
      if (arr4[i] >= "A" && arr4[i] <= "Z") {
        result = result + arr4[i];
      } else {
        result = result + arr1[i];
      }
    }
    // return result;
    if (this.flag) {
      return result.toUpperCase();
    } else {
      return result.toUpperCase().split("").reverse().join("");
    }
  }
}

module.exports = VigenereCipheringMachine;
