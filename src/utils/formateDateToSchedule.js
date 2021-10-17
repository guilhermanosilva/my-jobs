import addZero from './addZero';

function formatDateToSchedule({ date, hour, minute }) {
  const shortDate = [
    'jan', 'fev', 'mar', 'abr', 'mai', 'jun',
    'jul', 'ago', 'set', 'out', 'nov', 'dez',
  ];

  const data = new Date(date);
  const day = data.getDate();
  const month = data.getMonth();
  const startHours = data.getHours();
  const startMinutes = data.getMinutes();
  data.setHours(data.getHours() + Number(hour));
  data.setMinutes(data.getMinutes() + Number(minute));
  const endHours = data.getHours();
  const endMinutes = data.getMinutes();

  function isMinuteZero(minutes) {
    let formatMinute = '';

    if (minutes === 0) {
      formatMinute = '';
      return formatMinute;
    }

    formatMinute = addZero(minutes);

    formatMinute = `:${formatMinute}`;
    return formatMinute;
  }

  return `${day}/${shortDate[month - 1]} das ${startHours}${isMinuteZero(startMinutes)}h às ${endHours}${isMinuteZero(endMinutes)}h`;
}
export default formatDateToSchedule;
