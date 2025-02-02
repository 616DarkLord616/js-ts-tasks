/**
 * Write a function to group two types of users into EMPLOYEE and CONTRACTOR groups
 *
 * A function should return an object consists of two arrays of grouped users:
 * {
 *   employees: [...]
 *   contractors: [...]
 * }
 * @param {Array<unknown>} users
 * @returns {Object<employees: Array<any>, contractors: Array<any>>}
 */
module.exports.groupUsers = function (users: Array<unknown>): Record<'employees' | 'contractors', Array<unknown>> {
  const result: Record<'employees' | 'contractors', Array<unknown>> = {
    employees: [],
    contractors: [],
  };

  users.forEach(user => {
    if (typeof user === 'object' && user !== null && 'type' in user) {
      const userType = (user as { type: string }).type;

      if (userType === 'EMPLOYEE') {
        result.employees.push(user);
      } else if (userType === 'CONTRACTOR') {
        result.contractors.push(user);
      }
    }
  });

  return result;
};
