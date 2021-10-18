import { useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';

import Container from './styles';

function Welcome() {
  const user = useContext(UserContext);

  return (
    <Container>
      <h1>Bem-vindo (a), {user.first_name}</h1>
      <p>Adicione seus jobs à agenda e gerencie sua rotina</p>
    </Container>
  );
}

export default Welcome;
