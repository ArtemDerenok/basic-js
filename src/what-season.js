const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let season = "";
  if (date === undefined) {
    season = season + "Unable to determine the time of year!";
    return season;
  }
  checkDate = new Date();
  if (
    Object.prototype.toString.call(date) !=
    Object.prototype.toString.call(checkDate)
  )
    throw new Error();

  let month = date.getMonth();

  if ((month >= 0 && month <= 1) || month == 11) {
    season = season + "winter";
    return season;
  } else if (month >= 2 && month <= 4) {
    season = season + "spring";
    return season;
  } else if (month >= 5 && month <= 7) {
    season = season + "summer";
    return season;
  } else if (month >= 8 && month <= 10) {
    season = season + "autumn";
    return season;
  }
};
