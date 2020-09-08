import React, { useContext } from 'react';
import { Context } from './Context';

const ScheduleHeader = () => {
  const { monthName } = useContext(Context);

  return <div className='schedule__header'>{monthName.toUpperCase()}</div>;
};

export default ScheduleHeader;
