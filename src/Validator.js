export default class Validator {
  static validateUsername(userName) {
    const checkOne = /^[^\d\-_][\d\w\-_]*[^\d\-_]$/.test(userName);
    const checkTwo = /\d{4,}/g.test(userName);
    return checkOne && !checkTwo;
  }
}
