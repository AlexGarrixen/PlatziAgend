import { isDateToday } from '../../src/utils';

describe('Util isDateToday', () => {
  test('return true if is today', () => {
    const isToday = isDateToday('2020-08-31', '2020-08-31');

    expect(isToday).toBe(true);
  });

  test('return false if is not today', () => {
    const isToday = isDateToday('2020-08-31', '2020-09-31');

    expect(isToday).toBe(false);
  });
});
