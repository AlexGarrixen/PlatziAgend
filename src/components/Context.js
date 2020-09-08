import React, { createContext, useMemo } from 'react';
import {
  generateDaysOfWeek,
  generateTimeline,
  getMonthCurrent,
  getTimestamp,
} from '../utils';

export const Context = createContext({});

export const ContextProvider = ({
  children,
  startHour,
  endHour,
  unitDur,
  events,
}) => {
  const daysOfWeek = generateDaysOfWeek();
  const timeline = generateTimeline(startHour, endHour, unitDur);
  const monthName = getMonthCurrent();
  const timelineStart = getTimestamp(timeline[0].format24.split(' ')[0]);
  const timelineUnitDuration =
    getTimestamp(timeline[1].format24.split(' ')[0]) -
    getTimestamp(timeline[0].format24.split(' ')[0]);

  const contexValue = useMemo(
    () => ({
      daysOfWeek,
      timeline,
      monthName,
      events,
      timelineStart,
      timelineUnitDuration,
    }),
    [events, startHour, endHour, unitDur]
  );

  return <Context.Provider value={contexValue}>{children}</Context.Provider>;
};
