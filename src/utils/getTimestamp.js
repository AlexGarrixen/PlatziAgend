const getTimestamp = (stringHour) => {
  const arr = stringHour.replace(/ /g, '').split(':');
  const hours = parseInt(arr[0]);
  const minutes = parseInt(arr[1]);
  const timestamp = hours * 60 + minutes;

  return timestamp;
};

export default getTimestamp;
