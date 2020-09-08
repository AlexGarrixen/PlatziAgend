import React from 'react';
import { mount } from 'enzyme';
import { Context } from '../../src/components/Context';
import ScheduleDayBlock from '../../src/components/ScheduleDayBlock';

describe('<ScheduleDayBlock />', () => {
  const contextValue = {
    events: [
      {
        id: 1,
        title: 'Team Itsuki',
        date: '2020-09-10',
        hourStart: '15:30',
        hourEnd: '16:30',
      },
      {
        id: 2,
        title: 'Team Miku',
        date: '2020-09-10',
        hourStart: '13:30',
        hourEnd: '14:00',
      },
    ],
  };

  const wrapper = mount(
    <Context.Provider value={contextValue}>
      <ScheduleDayBlock formatDate='2020-09-10' formatShort='LUNES 13' />
    </Context.Provider>
  );

  test('Render with events', () => {
    expect(wrapper.find('.schedule__event').length).toBe(2);
  });
});
