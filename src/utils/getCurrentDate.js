import addZero from './addZero';

const month = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
];

const monthShort = [
  'jan', 'fev', 'mar', 'abr', 'mai', 'jun',
  'jul', 'ago', 'set', 'out', 'nov', 'dez',
];

function getCurrentDate() {
  const date = new Date();
  const day = date.getDate().toString();
  const dayFormat = (day.length === 1) ? `0${day}` : day;
  const mes = (date.getMonth()).toString();
  const year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();

  hour = addZero(hour);
  minutes = addZero(minutes);

  const stringDate = `Hoje - ${dayFormat} de ${month[mes]} de ${year} - ${hour}:${minutes}`;
  const stringDateShort = `${dayFormat} ${monthShort[mes]} ${year} - ${hour}:${minutes}`;

  return {
    stringDate,
    stringDateShort,
  };
}

export default getCurrentDate;
