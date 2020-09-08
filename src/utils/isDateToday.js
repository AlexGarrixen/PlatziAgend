import { dayjs } from './index';

const isDateToday = (dateBase, date) => dayjs(dateBase).isSame(date, 'date');

export default isDateToday;
