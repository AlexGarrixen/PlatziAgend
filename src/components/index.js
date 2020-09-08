import React from 'react';
import PropTypes from 'prop-types';
import { ContextProvider } from './Context';
import Header from './ScheduleHeader';
import Timeline from './ScheduleTimeline';
import DaysOfWeek from './ScheduleDaysOfWeek';

const Schedule = ({ startHour, endHour, events = [], diffMinutUnit }) => {
  return (
    <ContextProvider
      startHour={startHour}
      endHour={endHour}
      unitDur={diffMinutUnit}
      events={events}
    >
      <div className='wrapper'>
        <Header />
        <div className='schedule'>
          <Timeline />
          <DaysOfWeek />
        </div>
      </div>
    </ContextProvider>
  );
};

Schedule.propTypes = {
  startHour: PropTypes.number.isRequired,
  endHour: PropTypes.number.isRequired,
  diffMinutUnit: PropTypes.number,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      date: PropTypes.string,
      hourStart: PropTypes.string,
      hourEnd: PropTypes.string,
    })
  ),
};

export default Schedule;
