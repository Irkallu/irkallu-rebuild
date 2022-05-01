const luxon = require('luxon');

module.exports = value => {
  const dateObject = luxon.DateTime.fromISO(value);
  return dateObject.toLocaleString(luxon.DateTime.DATE_HUGE);
};
