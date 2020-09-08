import { dayjs } from './index';

const getMonthCurrent = () => dayjs().format('MMMM');

export default getMonthCurrent;
