import Container from './styled';

import getCurrentDate from '../../utils/getCurrentDate';

function CurrentDate() {
  return (
    <Container>
      <span>Hoje - </span>
      {getCurrentDate()}
    </Container>
  );
}

export default CurrentDate;
