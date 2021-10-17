import { useContext, useState } from 'react';

import Calendar from '../../assets/images/Calendar.svg';
import { ScheduleContext } from '../../providers/ScheduleProvider';
import formatDateToSchedule from '../../utils/formateDateToSchedule';

import {
  Form, InputDate, Input, ScheduleButton,
} from './styles';

function ScheduleForm() {
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [inputType, setInputType] = useState('text');

  const { setUserSchedules } = useContext(ScheduleContext);

  function handleTypeDate() {
    setInputType('datetime-local');
  }

  function handleInputDate(e) {
    if (!e.target.value) {
      setInputType('text');
    }

    setDate(e.target.value);
  }

  function handleInputHour(e) {
    let hours = e.target.value;
    hours = hours.replace(/\D/g, '');

    if (hours > 23) {
      hours = hours.replace(/(\d)(\d)/, '$1');
    }

    setHour(hours);
  }

  function handleInputMinute(e) {
    let minutes = e.target.value;
    minutes = minutes.replace(/\D/g, '');

    if (minutes < '00' || minutes > 59) {
      minutes = minutes.replace(/(\d)(\d)/, '$1');
    }
    setMinute(minutes);
  }

  function clearForm() {
    setDate('');
    setHour('');
    setMinute('');
    setInputType('text');
  }

  function handleSubmit(e) {
    e.preventDefault();
    const scheduleDate = formatDateToSchedule({ date, hour, minute });
    setUserSchedules((prev) => [...prev, scheduleDate]);
    clearForm();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <InputDate
          value={date}
          type={inputType}
          placeholder="Selecione uma data..."
          onFocus={handleTypeDate}
          onChange={handleInputDate}
          required
        />
      </div>
      <div>
        <Input
          value={hour}
          type="text"
          placeholder="Hora"
          minLength={2}
          maxLength={2}
          onChange={handleInputHour}
          required
        />
      </div>
      <div>
        <Input
          value={minute}
          type="text"
          placeholder="Minuto"
          minLength={2}
          maxLength={2}
          onChange={handleInputMinute}
          required
        />
      </div>
      <ScheduleButton type="submit">
        <img src={Calendar} alt="calendar" />
        |
        <span> Agendar </span>
      </ScheduleButton>
    </Form>
  );
}

export default ScheduleForm;
