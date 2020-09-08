import React, { useContext } from 'react';
import { Context } from './Context';
import DayBlock from './ScheduleDayBlock';

const ScheduleDaysOfWeek = () => {
  const { daysOfWeek } = useContext(Context);

  return (
    <ul className='schedule__daysWeek'>
      {daysOfWeek.map(({ formatShort, formatDate }) => (
        <DayBlock
          formatShort={formatShort}
          formatDate={formatDate}
          key={formatDate}
        />
      ))}
    </ul>
  );
};

export default ScheduleDaysOfWeek;
