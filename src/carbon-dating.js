const { match } = require("sinon");
const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    Number(sampleActivity) !== +sampleActivity ||
    Number(sampleActivity) <= 0 ||
    Number(sampleActivity) > MODERN_ACTIVITY ||
    typeof sampleActivity != "string"
  ) {
    return false;
  } else {
    let result =
      Math.log(MODERN_ACTIVITY / +sampleActivity) / (0.693 / HALF_LIFE_PERIOD);
    return Math.ceil(result);
  }
};
