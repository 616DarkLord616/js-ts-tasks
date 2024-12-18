/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promisesArray)) {
      return reject(new TypeError('promisesArray must be an array'));
    }

    const results = [];
    let resolvedCount = 0;

    if (promisesArray.length === 0) {
      return resolve(results);
    }

    for (let i = 0; i < promisesArray.length; i++) {
      const promise = promisesArray[i];

      Promise.resolve(promise)
        .then(value => {
          results[i] = value;
          resolvedCount++;

          if (resolvedCount === promisesArray.length) {
            resolve(results);
          }
        })
        .catch(error => {
          reject(error);
        });
    }
  });
};
