import { useState } from 'react';
import Container from './styled';

import getCurrentDate from '../../utils/getCurrentDate';

function CurrentDate() {
  const [clock, setClock] = useState();
  // const screenWidth = window.screen.width;

  const date = getCurrentDate();

  setInterval(() => {
    setClock(date.stringDateShort);
  }, 1000);
  return (
    <Container>
      {clock}
    </Container>
  );
}

export default CurrentDate;
