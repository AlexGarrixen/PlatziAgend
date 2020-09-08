import { getMonthCurrent } from '../../src/utils';

describe('Util getMonthCurrent', () => {
  test('return string', () => {
    const str = getMonthCurrent();

    expect(typeof str).toBe('string');
  });
});
