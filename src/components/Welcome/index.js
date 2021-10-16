import { useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';

function Welcome() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>Bem-vindo (a), {user.first_name}</h1>
      <p>Adicione seus jobs à agenda e gerencie sua rotina</p>
    </div>
  );
}

export default Welcome;
