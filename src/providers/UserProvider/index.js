/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState([]);

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

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
