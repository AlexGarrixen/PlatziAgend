import { dayjs } from './index';

const generateDaysOfWeek = () => {
  let days = [];
  const dateStart = dayjs().clone().startOf('week');

  for (let i = 0; i <= 5; i++) {
    const date = dayjs(dateStart).add(i, 'day');
    days.push({
      formatShort: date.format('dddd DD'),
      formatDate: date.format('YYYY-MM-DD'),
    });
  }

  return days;
};

export default generateDaysOfWeek;
