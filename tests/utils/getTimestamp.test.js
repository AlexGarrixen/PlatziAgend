import { getTimestamp } from '../../src/utils';

describe('Util getTimestamp', () => {
  test('return timestamp in minutes', () => {
    const value = getTimestamp('13:30');

    expect(value).toBe(810);
  });
});
