/* eslint-disable no-console */
import { useEffect, useState } from 'react';

import generateDateDifference from '../../utils/generateDateDifference';

import Verified from '../../assets/images/Verified.svg';
import Clock from '../../assets/images/Clock.svg';

import { PerfilImage, ContainerUserInfo } from './styles';

function UserInfo() {
  const [user, setUser] = useState([]);
  const [workTimer, setWorkTimer] = useState('');

  useEffect(() => {
    fetch('https://api.jsonbin.io/b/6169fc159548541c29c3c658', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setWorkTimer(generateDateDifference(user.created_at));
  }, [user]);

  return (
    <ContainerUserInfo>
      <PerfilImage src={user.picture} alt="perfil" height={200} />
      <strong>
        {`${user.first_name} ${user.last_name}`}
        <img src={Verified} alt="verified" />
      </strong>
      <small>{user.role}</small>
      <p>
        <span>Altura:
          {` ${user.height?.substr(0, 1)}.${user.height?.substr(1)}`}
        </span>
        <span>Manequim: {user.size}</span>
        <span>Calçado: {user.shoe}</span>
      </p>
      <div>
        <img src={Clock} alt="clock" />
        <p>Tempo na Closeer: {workTimer} anos</p>
      </div>
    </ContainerUserInfo>
  );
}

export default UserInfo;
