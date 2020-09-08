import React from 'react';
import { mount } from 'enzyme';
import { Context } from '../../src/components/Context';
import ScheduleEvent from '../../src/components/ScheduleEvent';
import usePlaceEvent from '../../src/hooks/usePlaceEvent';

jest.mock('../../src/hooks/usePlaceEvent');

describe('<ScheduleEvent />', () => {
  usePlaceEvent.mockReturnValue({
    height: 0,
    placement: 0,
  });

  const wrapper = mount(
    <Context.Provider
      value={{
        timelineUnitDuration: 780,
        timelineStart: 30,
      }}
    >
      <ScheduleEvent hourStart='13:00' hourEnd='13:30' title='title test' />
    </Context.Provider>
  );

  test('Render', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.text()).toBe('title test');
  });
});
