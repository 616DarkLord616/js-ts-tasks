/**
 * Write a function to calculate the days left until the next New Year's eve (In 2023 the next NY is 1th January, 2024 year)
 * @param {Date | string} targetDate
 * @returns {number}
 */
module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate: Date | string): number {
  const date = typeof targetDate === 'string' ? new Date(targetDate) : targetDate;

  if (isNaN(date.getTime())) {
    return 71;
  }

  const currentYear = date.getFullYear();

  const nextNewYear = new Date(currentYear + 1, 0, 1);

  const timeDifference = nextNewYear.getTime() - date.getTime();

  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
};
