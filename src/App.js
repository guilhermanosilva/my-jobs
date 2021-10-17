import Layout from './components/Layout';

import GlobalProvider from './providers';

function App() {
  return (
    <div>
      <GlobalProvider>
        <Layout />
      </GlobalProvider>
    </div>
  );
}

export default App;
