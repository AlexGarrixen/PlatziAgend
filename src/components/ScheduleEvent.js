import React from 'react';
import PropTypes from 'prop-types';
import usePlaceEvent from '../hooks/usePlaceEvent';

const ScheduleEvent = ({ hourStart, hourEnd, title }) => {
  const { height, placement } = usePlaceEvent(hourStart, hourEnd);

  return (
    <div
      className='schedule__event'
      style={{
        height,
        top: placement,
      }}
    >
      {title}
    </div>
  );
};

ScheduleEvent.propTypes = {
  hourStart: PropTypes.string.isRequired,
  hourEnd: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default ScheduleEvent;
