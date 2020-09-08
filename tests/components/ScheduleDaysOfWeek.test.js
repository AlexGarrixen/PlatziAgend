import React from 'react';
import { mount } from 'enzyme';
import { Context } from '../../src/components/Context';
import ScheduleDaysOfWeek from '../../src/components/ScheduleDaysOfWeek';

describe('<ScheduleDaysOfWeek />', () => {
  const contextValue = {
    daysOfWeek: [
      {
        formatShort: 'LUNES 13',
        formatDate: '2020-01-13',
      },
      {
        formatShort: 'MARTES 12',
        formatDate: '2020-01-14',
      },
      {
        formatShort: 'MIERCOLES 14',
        formatDate: '2020-01-15',
      },
    ],
    events: [],
  };

  const wrapper = mount(
    <Context.Provider value={contextValue}>
      <ScheduleDaysOfWeek />
    </Context.Provider>
  );

  test('Render days of week', () => {
    expect(wrapper.find('.schedule__dayBlock').length).toBe(3);
  });
});
