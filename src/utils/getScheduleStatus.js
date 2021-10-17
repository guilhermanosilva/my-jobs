import { differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns';

function getScheduleStatus(date) {
  let status = 'future';
  const currentDate = new Date();
  const scheduleDate = new Date(date);

  const diferencaDeDias = differenceInDays(scheduleDate, currentDate);
  const diferencaDeHoras = differenceInHours(scheduleDate, currentDate);
  const diferencaDeMinutos = differenceInMinutes(scheduleDate, currentDate);

  const isToday = diferencaDeDias === 0;
  const isLessTwelve = diferencaDeHoras <= 12;
  const isPassHour = diferencaDeHoras < 0;
  const isCurrentHour = diferencaDeHoras === 0;
  const isPassMinutes = diferencaDeMinutos < 0;

  if (isToday && isLessTwelve) {
    status = 'near';
  }

  if (((isPassHour || isCurrentHour)) && isPassMinutes) {
    status = 'started';
  }

  return status;
}

export default getScheduleStatus;
