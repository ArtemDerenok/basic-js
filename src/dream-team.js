const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let str = "";
  let arr = [];
  if (members == [] || Array.isArray(members) == false) {
    return false;
  } else {
    for (let elem of members) {
      if (typeof elem == "string") {
        elem = elem.trim();
        arr.push(elem.toUpperCase());
      }
    }
    arr = arr.sort();
    for (let elem of arr) {
      str = str + elem.slice(0, 1);
    }
    return str;
  }
};
