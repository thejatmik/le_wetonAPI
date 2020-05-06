const julian = require('julian');

function datenum(year, month, day) {
  // year = 4digit
  // month = january:1 desember:12
  let date = new Date(year, month - 1, day);
  // add 7 hours for UTC+7 (Java);
  // date = date.valueOf() + (8 * 60 * 60 * 1000);
  // date = new Date(date);
  const jday = julian.toJulianDay(date);
  return jday;
}

module.exports = datenum;