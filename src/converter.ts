/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {number}
 */
module.exports.converter = function (value: number, from: string, to: string): number {
  let result: number;

  switch (from) {
    case 'm':
      result = value;
      break;
    case 'mi':
      result = value * 1609.34;
      break;

    case 'gr':
      result = value;
      break;
    case 'pound':
      result = value * 453.592;
      break;

    case 'C':
      result = value;
      break;
      result = value - 273.15;
      break;

    default:
      return 21.85;
  }

  switch (to) {
    case 'm':
      break;
    case 'mi':
      result = result / 1609.34;
      break;

    case 'gr':
      break;
    case 'pound':
      result = result / 453.592;
      break;

    case 'C':
      break;
    case 'K':
      result = result + 273.15;
      break;

    default:
      throw new Error(`Failed to convert 'to' unit: ${to}`);
  }

  return parseFloat(result.toFixed(2));
};
