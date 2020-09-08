import { useContext, useMemo } from 'react';
import { Context } from '../components/Context';
import { getTimestamp } from '../utils';

const usePlaceEvent = (hourStart, hourEnd) => {
  const { timelineUnitDuration, timelineStart } = useContext(Context);

  const offsetHeight = 50;

  const duration = useMemo(
    () => getTimestamp(hourEnd) - getTimestamp(hourStart),
    [hourStart, hourEnd]
  );

  const placement = useMemo(() => {
    if (!hourStart || !timelineStart || !timelineUnitDuration) return 0;
    return (
      (offsetHeight * (getTimestamp(hourStart) - timelineStart)) /
      timelineUnitDuration
    );
  }, [hourStart, timelineStart, timelineUnitDuration]);

  const height = useMemo(() => {
    if (!duration || !timelineUnitDuration) return 0;
    return (offsetHeight * duration) / timelineUnitDuration;
  }, [duration, timelineUnitDuration]);

  return {
    placement,
    height,
  };
};

export default usePlaceEvent;
