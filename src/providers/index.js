import UserProvider from './UserProvider';
import ScheduleProvider from './ScheduleProvider';

// eslint-disable-next-line react/prop-types
function GlobalProvider({ children }) {
  return (
    <UserProvider>
      <ScheduleProvider>
        {children}
      </ScheduleProvider>
    </UserProvider>
  );
}

export default GlobalProvider;
