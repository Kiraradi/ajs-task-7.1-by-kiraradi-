import Validator from '../src/Validator';

test.each([
  ['test1', 'kira23', false],
  ['test2', 'kira-', false],
  ['test3', 'kira_', false],
  ['test4', '22Kira', false],
  ['test5', '-kira', false],
  ['test6', '_kira', false],
  ['test7', 'Bear23-A_u_f', true],
  ['test8', 'lolo33423rr', false],
  ['test9', 'Super-W-Men', true],
  ['test10', 'RuSSian', true],
  ['test11', 'Samurai_', false],
  ['test12', 'BomSwer--66Y', true],
])('check %s', (nameTest, userName, rightResult) => {
  const checkUserName = Validator.validateUsername(userName);
  expect(rightResult).toBe(checkUserName);
});
