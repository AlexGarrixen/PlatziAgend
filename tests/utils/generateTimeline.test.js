import { generateTimeline } from '../../src/utils';

describe('Util generateTimeline', () => {
  test('create timeline', () => {
    const timeline = generateTimeline(13, 15);

    expect(timeline).toEqual([
      { format24: '13:00 PM', format12: '1:00 PM' },
      { format24: '14:00 PM', format12: '2:00 PM' },
      { format24: '15:00 PM', format12: '3:00 PM' },
    ]);
  });

  test('create timeline with unit duration', () => {
    const timeline = generateTimeline(13, 15, 30);

    expect(timeline).toEqual([
      { format24: '13:00 PM', format12: '1:00 PM' },
      { format24: '13:30 PM', format12: '1:30 PM' },
      { format24: '14:00 PM', format12: '2:00 PM' },
      { format24: '14:30 PM', format12: '2:30 PM' },
      { format24: '15:00 PM', format12: '3:00 PM' },
    ]);
  });
});
