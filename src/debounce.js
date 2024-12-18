/**
 * Write a function that receive 2 parameters function {fn} and delay {delay} (in milliseconds)
 * and returns another function which will pass invocation of {fn} only once during the delay period
 * @fn {function}
 * @delay {number}
 * @return {function}
 */
module.exports.debounce = function debounce(fn, delay) {
  let timeoutId;

  return function (...args) {
    // Clear the existing timeout if it exists
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set a new timeout
    timeoutId = setTimeout(() => {
      fn.apply(this, args); // Call the original function with the correct context and arguments
    }, delay);
  };
};
