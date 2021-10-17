/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const ScheduleContext = createContext();

function ScheduleProvider({ children }) {
  const [userSchedules, setUserSchedules] = useState([]);

  return (
    <ScheduleContext.Provider value={{ userSchedules, setUserSchedules }}>
      {children}
    </ScheduleContext.Provider>
  );
}

export default ScheduleProvider;
