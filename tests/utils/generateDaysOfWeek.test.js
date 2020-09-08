import { generateDaysOfWeek } from '../../src/utils';

describe('Util generateDaysOfWeek', () => {
  test('create days of week', () => {
    const days = generateDaysOfWeek();

    expect(Array.isArray(days)).toBe(true);
    expect(days.length).toBe(6);
  });
});
