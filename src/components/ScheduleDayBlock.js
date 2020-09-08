import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Context } from './Context';
import { isDateToday } from '../utils';
import EventItem from './ScheduleEvent';

const ScheduleDayBlock = ({ formatShort, formatDate }) => {
  const { events } = useContext(Context);
  const eventsOfDay = useMemo(
    () => events.filter((event) => isDateToday(event.date, formatDate)),
    [events]
  );

  return (
    <li className='schedule__dayBlock'>
      <div>{formatShort.toUpperCase()}</div>
      <div>
        {eventsOfDay.map((date) => (
          <EventItem key={date.id} {...date} />
        ))}
      </div>
    </li>
  );
};

ScheduleDayBlock.propTypes = {
  formatDate: PropTypes.string.isRequired,
  formatShort: PropTypes.string.isRequired,
};

export default ScheduleDayBlock;
