export function dateToMonthYear(date) {
  if (!date) {
    return null;
  }
  const [year, month, _] = date.split('-');
  const abbr = new Date(Number.parseInt(year), Number.parseInt(month) - 1)
          .toLocaleString("en-US", {month: "short"});
  
  return abbr + ' ' + year;
}

export function combineStartEndDate(startDate, endDate, callback) {
  if (!startDate && !endDate) {
    return null;
  } else if (!startDate) {
    return callback(endDate);
  } else if (!endDate) {
    return callback(startDate);
  } else if (callback(startDate) === callback(endDate)) {
    return callback(startDate);
  } else {
    return callback(startDate) + ' - ' + callback(endDate)
  }
}

export function extractYear(date) {
  if (!date) {
    return null;
  }
  const [year, month, day] = date.split('-');
  return year;
}