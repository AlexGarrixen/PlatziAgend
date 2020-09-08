import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Context } from '../../src/components/Context';
import usePlaceEvent from '../../src/hooks/usePlaceEvent';

describe('Hook: usePlaceEvent', () => {
  const wrapper = ({ children }) => (
    <Context.Provider
      value={{
        timelineUnitDuration: 780,
        timelineStart: 30,
      }}
    >
      {children}
    </Context.Provider>
  );

  test('values return', () => {
    const { result } = renderHook(() => usePlaceEvent('14:00', '14:30'), {
      wrapper,
    });

    expect(typeof result.current.placement).toBe('number');
    expect(typeof result.current.height).toBe('number');
  });
});
