import { QueryClientProvider, QueryClient } from  '@tanstack/react-query';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;
