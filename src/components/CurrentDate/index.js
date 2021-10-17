import { useState } from 'react';
import Container from './styled';

import getCurrentDate from '../../utils/getCurrentDate';

function CurrentDate() {
  const [clock, setClock] = useState();

  setInterval(() => {
    setClock(getCurrentDate());
  }, 1000);
  return (
    <Container>
      <span>Hoje - </span>
      {clock}
    </Container>
  );
}

export default CurrentDate;
