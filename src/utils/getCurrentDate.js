const month = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
];

function getCurrentDate() {
  const date = new Date();
  const day = date.getDate().toString();
  const dayFormat = (day.length === 1) ? `0${day}` : day;
  const mes = (date.getMonth()).toString();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  return `${dayFormat} de ${month[mes]} de ${year} - ${hour}:${minutes}`;
}

export default getCurrentDate;
