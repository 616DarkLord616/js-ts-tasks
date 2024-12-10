class User 
{
  constructor(firstName, secondName, age) 
  {
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
    
    if (typeof firstName !== 'string' || typeof secondName !== 'string') {
      throw new TypeError('First and second names must be strings');
    }
    if (typeof age !== 'number') {
      throw new TypeError('Age must be a number');
    }
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Firstname must be a string');
    }
    this._firstName = value;
  }

  get secondName() {
    return this._secondName;
  }

  set secondName(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Secondname must be a string');
    }
    this._secondName = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Age must be a number');
    }
    this._age = value;
  }

  get name() {
    return `${this._firstName} ${this._secondName}`;
  }

  introduce() {
    return `My name is ${this.name}, I'm ${this.age}`;
  }

  celebrateBirthday() {
    this._age++;
  }
}

/**
 * Create a class named User
 * @type {User}
 */
module.exports.User = User;

/**
 * Create new User object and return it
 * @param {string} firstName
 * @param {string} secondName
 * @param {number} age
 * @returns {User}
 */
module.exports.createUser = function (firstName, secondName, age) 
{
  return new User(firstName, secondName, age);
};

/**
 * Create Array of Users by provided Array with user data (firstName, secondName, age)
 * @param {Array<{ firstName, secondName, age }>} data
 * @returns {Array<User>}
 */
module.exports.createUsers = function(data) 
{
  return data.map(({ firstName, secondName, age }) => new User(firstName, secondName, age));
};

/**
 * Find Users in Array of Users who's age equals the provided age
 * @param {Array<User>} users
 * @param {number} age
 * @returns {Array<User>}
 */
module.exports.findUsersByAge = function (users, age) 
{
  return users.filter(user => user.age === age);
};

/**
 * Return a function that sort provided Array of Users using a comparator function from TestUtils
 * @param TestUtils
 * @returns {function(*): *[]}
 */
module.exports.createUsersSortFn = function (TestUtils) 
{
  return (users) => users.sort(TestUtils.comparator);
};

/**
 * In Array of Users every User under odd index in Array should celebrate his birthday
 * @param {Array<User>} users
 * @return {Array<User>}
 */
module.exports.celebrate = function (users) 
{
  return users.map((user, index) => {
    if (index % 2 === 0) {
      const newUser = Object.create(user);
      newUser.celebrateBirthday();
      return newUser;
    }
    return user;
  });
};
