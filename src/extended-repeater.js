const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = "";
  if (typeof str != "string" || typeof options.addition != "string") {
    str = String(str);
    options.addition = String(options.addition);
  }
  if (options.separator == undefined) {
    options.separator = "+";
  }
  if (options.additionSeparator == undefined) {
    options.additionSeparator = "|";
  }
  if (options.repeatTimes == undefined) {
    options.repeatTimes = 1;
  }
  if (options.additionRepeatTimes == undefined) {
    options.additionRepeatTimes = 1;
  }
  for (let i = 0; i < options.repeatTimes; i++) {
    result = result + str;
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      if (options.addition == "undefined") {
        break;
      }
      result = result + options.addition;
      if (j == options.additionRepeatTimes - 1) {
        break;
      }
      result = result + options.additionSeparator;
    }
    if (i == options.repeatTimes - 1) {
      break;
    }
    result = result + options.separator;
  }
  return result;
};
