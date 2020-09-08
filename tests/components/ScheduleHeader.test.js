import React from 'react';
import { mount } from 'enzyme';
import { Context } from '../../src/components/Context';
import ScheduleHeader from '../../src/components/ScheduleHeader';

describe('<ScheduleHeader />', () => {
  const wrapper = mount(
    <Context.Provider value={{ monthName: 'September' }}>
      <ScheduleHeader />
    </Context.Provider>
  );

  test('Render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Value of month', () => {
    expect(wrapper.find('.schedule__header').text()).toBe('SEPTEMBER');
  });
});
