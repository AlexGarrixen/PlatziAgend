import { dayjs } from './index';

const setHour = (number) => dayjs().hour(number).minute(0);

const addUnitToTime = (unit, time) => time.add(unit, 'minute');

const createTimeline = (startHour, endHour, unitDuration) => {
  let timeline = [];

  for (let i = startHour; i <= endHour; i++) {
    const hourBase = setHour(i);
    timeline.push({
      format24: hourBase.format('H:mm A'),
      format12: hourBase.format('h:mm A'),
    });

    if (unitDuration && unitDuration !== 60) {
      const hourWithUnit = addUnitToTime(unitDuration, hourBase);
      timeline.push({
        format24: hourWithUnit.format('H:mm A'),
        format12: hourWithUnit.format('h:mm A'),
      });
    }
  }

  if (unitDuration) timeline.pop();

  return timeline;
};

export default createTimeline;
