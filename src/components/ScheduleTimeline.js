import React, { useContext } from 'react';
import { Context } from './Context';

const ScheduleTimeline = () => {
  const { timeline } = useContext(Context);

  return (
    <ul className='schedule__timeline'>
      {timeline.map(({ format12 }) => (
        <li key={format12} className='schedule__timeline-item'>
          {format12}
        </li>
      ))}
    </ul>
  );
};

export default ScheduleTimeline;
