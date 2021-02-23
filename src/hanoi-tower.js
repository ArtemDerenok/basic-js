const { match } = require("sinon");
const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let obj = {};
  let turn = Math.pow(2, disksNumber) - 1;
  let second = turn / (turnsSpeed / 3600);
  obj["turns"] = turn;
  obj["seconds"] = Math.floor(second);
  return obj;
};
