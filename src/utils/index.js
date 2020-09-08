import dayjs from 'dayjs';
import 'dayjs/locale/es';
import generateTimeline from './generateTimeline';
import generateDaysOfWeek from './generateDaysOfWeek';
import isDateToday from './isDateToday';
import getMonthCurrent from './getMonthCurrent';
import getTimestamp from './getTimestamp';

dayjs.locale('es');

export {
  dayjs,
  generateTimeline,
  generateDaysOfWeek,
  isDateToday,
  getMonthCurrent,
  getTimestamp,
};
