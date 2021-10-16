import Layout from './components/Layout';

import UserProvider from './providers/UserProvider';

function App() {
  return (
    <div>
      <UserProvider>
        <Layout />
      </UserProvider>
    </div>
  );
}

export default App;
